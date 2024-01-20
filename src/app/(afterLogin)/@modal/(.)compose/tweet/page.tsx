"use client";

import Image from "next/image";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { StyledTweetModal } from "./tweet.style";
import { IoMdImages } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TweetModal() {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const { data: me } = useSession();

  const onSubmit = () => {};
  const onClickClose = () => {
    router.back();
  };
  const onClickUploadButton = () => {
    imageRef.current?.click();
  };
  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    console.log("content", content);
  }, [content]);

  return (
    <StyledTweetModal>
      <div className="modalBackground">
        <div className="modal">
          <button className="closeButton" onClick={onClickClose}>
            <AiFillCloseCircle size={20} />
          </button>
          <form action="" className="modalForm" onSubmit={onSubmit}>
            <div className="modalBody">
              <div className="postUserSection">
                <div className="postUserImage">
                  <img
                    src={me?.user?.image as string}
                    alt={me?.user?.email as string}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <textarea
                  name=""
                  id=""
                  className="input"
                  placeholder="무슨 일이 일어나고 있나요?"
                  value={content}
                  onChange={onChangeContent}
                ></textarea>
              </div>
            </div>
            <div className="modalFooter">
              <div className="modalDivider" />
              <div className="footerButtons">
                <div className="footerButtonLeft">
                  <input
                    type="file"
                    name="imageFiles"
                    multiple
                    hidden
                    ref={imageRef}
                  />
                  <button
                    className="uploadButton"
                    onClick={onClickUploadButton}
                  >
                    <IoMdImages size={20} />
                  </button>
                </div>
                <button className="actionButton" disabled={!content}>
                  게시하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledTweetModal>
  );
}
