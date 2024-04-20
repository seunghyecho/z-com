"use client";

import { useSession } from "next-auth/react";
import { IoMdImage } from "react-icons/io";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { StyledCommentForm } from "./CommentForm.style";
import { useQueryClient } from "@tanstack/react-query";

interface CommentFormProps {
  id: string;
}
export default function CommentForm({ id }: CommentFormProps) {
  const imageRef = useRef<HTMLInputElement>(null); // input useRef error로 인한 타입스크립트 처리
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  console.log("CommentForm", post, id);

  const { data: me } = useSession();

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

  if (!post) return null;

  return (
    <StyledCommentForm className="postForm" onSubmit={onSubmit}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img
            src={me?.user?.image as string}
            alt={me?.user?.email as string}
          />
        </div>
      </div>
      <div className="postInputSection">
        <textarea
          name=""
          id=""
          value={content}
          onChange={onChange}
          placeholder="답글 게시하기"
        ></textarea>
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
                <IoMdImage size={20} />
              </button>
            </div>
            <button
              className="actionButton"
              disabled={!content}
              onClick={onClickActionButton}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </StyledCommentForm>
  );
}
