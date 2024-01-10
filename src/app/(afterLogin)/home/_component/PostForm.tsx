"use client";

import Image from "next/image";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { useSession } from "next-auth/react";
import { StyledPostForm } from "./PostForm.style";

export default function PostForm({}) {
  const imageRef = useRef<HTMLInputElement>(null); // input useRef error로 인한 타입스크립트 처리
  const [content, setContent] = useState("");
  const { data: session } = useSession();

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

  if (!session?.user) return;

  return (
    <StyledPostForm className="postForm" onSubmit={onSubmit}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img
            src={session?.user.image as string}
            alt={session?.user.email as string}
          />
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
