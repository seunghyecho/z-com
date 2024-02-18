"use client";

import Image from "next/image";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { Session } from "@auth/core/types";
import { StyledPostForm } from "./PostForm.style";

type Props = {
  me: Session | null;
};

export default function PostForm({ me }: Props) {
  const imageRef = useRef<HTMLInputElement>(null); // input useRef error로 인한 타입스크립트 처리
  const [content, setContent] = useState("");

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickUploadButton = () => {
    imageRef.current?.click(); // current가 null 일 경우 ? 예외 처리
  };

  const onClickActionButton = () => {};

  if (!me?.user) return;

  return (
    <StyledPostForm className="postForm" onSubmit={onSubmit}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img src={me?.user.image as string} alt={me?.user.email as string} />
        </div>
      </div>
      <div className="postInputSection">
        <textarea name="" id="" value={content} onChange={onChange}></textarea>
        <div className="postButtonSection">
          <div className="footerButtons">
            <div className="footerButtonLeft">
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <button className="uploadButton" onClick={onClickUploadButton}>
                <IoMdImages size={20} />
              </button>
            </div>
            <button className="actionButton" onClick={onClickActionButton}>
              Post
            </button>
          </div>
        </div>
      </div>
    </StyledPostForm>
  );
}
