"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";

import { StyledPhotoModal } from "./photoModal.style";

export default function PhotoModal() {
  // http://localhost:3000/shcho/status/1/photo/1

  return (
    <StyledPhotoModal className="container">
      <PhotoModalCloseButton />
      <div className="imageZone">
        <img src="" alt="" />
        <div className="image"></div>
        <div className="buttonZone">
          <div className="buttonInner">
            <ActionButton white />
          </div>
        </div>
      </div>
      <div className="commentZone">
        <Post noImage />
        <CommentForm />
      </div>
    </StyledPhotoModal>
  );
}
