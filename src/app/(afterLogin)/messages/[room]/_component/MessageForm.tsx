"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import ReactTextareaAutosize from "react-textarea-autosize";
import { StyledMessageForm } from "./MessageForm.style";

export const MessageForm = () => {
  const [content, setContent] = useState("");
  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO socket.io 연결
    setContent("");
  };
  return (
    <StyledMessageForm className="formZone">
      <form className="form" onSubmit={onSubmit}>
        <ReactTextareaAutosize onChange={onChangeContent} />
        <button className="submitButton" type="submit" disabled={!content}>
          <GoPaperAirplane size={20} />
        </button>
      </form>
    </StyledMessageForm>
  );
};
