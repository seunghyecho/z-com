"use client";

import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { GoPaperAirplane } from "react-icons/go";
import ReactTextareaAutosize from "react-textarea-autosize";
import useSocket from "@/app/(afterLogin)/messages/_lib/useSocket";
import { StyledMessageForm } from "./MessageForm.style";
import { useSession } from "next-auth/react";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { Message } from "@/model/Message";

interface MessageFormProps {
  id: string;
}
export const MessageForm = ({ id }: MessageFormProps) => {
  const [content, setContent] = useState("");
  const [socket] = useSocket();
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // socket.io 연결
    // sendMessage 는 서버와의 약속
    if (!session?.user?.email) return;

    const ids = [session.user.email, id];
    ids.sort();

    socket?.emit("sendMessage", {
      senderId: session?.user?.email,
      receiverId: id,
      content,
    });
    // TODO react 쿼리 데이터에 추가
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
      newLastPage.push({
        senderId: session?.user?.email,
        receiverId: id,
        content,
        room: ids.join("-"),
        messageId: lastMessageId ? lastMessageId + 1 : 1,
        createdAt: new Date(),
      });

      newMessages.pages[newMessages.pages.length - 1] = newLastPage;
      queryClient.setQueryData(
        [
          "rooms",
          { senderId: session?.user?.email, receiverId: id },
          "messages",
        ],
        newMessages
      );
    }

    // invalidate query 할 경우, 바로 업데이트

    setContent("");
  };

  useEffect(() => {
    socket?.on("receiveMessage", (data) => {
      console.log("receiveMessage", data);
    });
    return () => {
      socket?.off("receiveMessage");
    };
  }, [socket]);

  return (
    <StyledMessageForm className="formZone">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <ReactTextareaAutosize value={content} onChange={onChangeContent} />
        <button className="submitButton" type="submit" disabled={!content}>
          <GoPaperAirplane size={20} />
        </button>
      </form>
    </StyledMessageForm>
  );
};
