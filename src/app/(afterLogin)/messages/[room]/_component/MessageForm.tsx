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

interface MessageFormProps {
  id: string;
}
export const MessageForm = ({ id }: MessageFormProps) => {
  const [content, setContent] = useState("");
  const [socket] = useSocket();
  const { data: session } = useSession();

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // socket.io 연결
    // sendMessage 는 서버와의 약속
    socket?.emit("sendMessage", {
      senderId: session?.user?.email,
      receiverId: id,
      content,
    });
    // react 쿼리 데이터에 추가
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
