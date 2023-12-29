"use client";

import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { StyledPostForm } from "./PostForm.style";
import { IoMdImages } from "react-icons/io";
import { me } from "@/app/const/common";
import Image from "next/image";

export default function PostForm({}) {
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

  return (
    <StyledPostForm className="postForm" onSubmit={onSubmit}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img src={me.image.src} alt={me.image.src} />
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
