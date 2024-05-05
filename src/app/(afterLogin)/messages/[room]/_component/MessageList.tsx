"use client";

import { Message } from "@/model/Message";
import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getMessages } from "../_lib/getMessages";
import { useMessageStore } from "@/store/message";
import useSocket from "../../_lib/useSocket";

interface MessageListProps {
  id: string;
}
export default function MessageList({ id }: MessageListProps) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const shouldGoDown = useMessageStore().shouldGoDown;
  const setGoDown = useMessageStore().setGoDown;

  const listRef = useRef<HTMLDivElement>(null);
  const [pageRendered, setPageRendered] = useState(false);

  const {
    data: messages,
    isFetching,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery<
    Message[],
    DefaultError,
    InfiniteData<Message[]>,
    [string, { senderId: string; receiverId: string }, string],
    number
  >({
    queryKey: [
      "rooms",
      { senderId: session?.user?.email as string, receiverId: id },
      "messages",
    ],
    queryFn: getMessages,
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.at(0)?.messageId,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.messageId,
    enabled: !!(session?.user?.email && id),
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasPreviousPage && fetchPreviousPage();
    }
  }, [inView, isFetching, hasPreviousPage, fetchPreviousPage]);

  // 새로 로드 되면 맨 위로?
  let hasMessages = !!messages;
  useEffect(() => {
    if (hasMessages) {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current?.scrollHeight;
      }
      setPageRendered(true);
    }
  }, [hasMessages]);

  useEffect(() => {
    if (shouldGoDown) {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current?.scrollHeight;
        setGoDown(false);
      }
    }
  }, [shouldGoDown, setGoDown]);

  const [socket] = useSocket();
  useEffect(() => {
    socket?.on("receiveMessage", (data) => {
      console.log("receiveMessage", data);

      // react 쿼리 데이터에 추가
      const oldMessages = queryClient.getQueryData([
        "rooms",
        { senderId: session?.user?.email, receiverId: id },
        "messages",
      ]) as InfiniteData<Message[]>;

      // 메세지 추가 시 가장 마지막에 추가하도록 설정

      if (oldMessages && typeof oldMessages === "object") {
        const newMessages = {
          ...oldMessages,
          pages: [...oldMessages.pages],
        };

        const lastPage = newMessages.pages.at(-1);
        const newLastPage = lastPage ? [...lastPage] : [];
        let lastMessageId = lastPage?.at(-1)?.messageId;
        newLastPage.push(data);

        newMessages.pages[newMessages.pages.length - 1] = newLastPage;
        queryClient.setQueryData(
          [
            "rooms",
            { senderId: session?.user?.email, receiverId: id },
            "messages",
          ],
          newMessages
        );
        setGoDown(true); // 새메세지 등록할때마다 내려가도록 설정.
      }
    });
    return () => {
      socket?.off("receiveMessage");
    };
  }, [socket]);

  return (
    <div className="list" ref={listRef}>
      {pageRendered && (
        <div ref={ref} style={{ height: 10 }}>
          돔을 인지하나?
        </div>
      )}
      {messages?.pages.map((page) =>
        page.map((m) => {
          if (m.senderId === session?.user?.email) {
            return (
              <div key={m.messageId} className="message myMessage">
                <div className="content">{m.content}</div>
                <div className="date">
                  {dayjs(m.createdAt).format("YYYY-MM-DD A HH:mm")}
                </div>
              </div>
            );
          }

          return (
            <div className="message yourMessage">
              <div className="content">{m.content}</div>
              <div className="date">
                {dayjs(m.createdAt).format("YYYY-MM-DD A HH:mm")}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
