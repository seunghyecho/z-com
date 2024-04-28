"use client";

import { Message } from "@/model/Message";
import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery,
} from "@tanstack/react-query";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getMessages } from "../_lib/getMessages";

interface MessageListProps {
  id: string;
}
export default function MessageList({ id }: MessageListProps) {
  const { data: session } = useSession();
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

  return (
    <div className="list">
      <div ref={ref} style={{ height: 50 }}>
        돔을 인지하나?
      </div>
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
