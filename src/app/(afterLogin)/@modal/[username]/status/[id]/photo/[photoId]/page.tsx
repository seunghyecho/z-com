"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";

import { StyledPhotoModal } from "./photoModal.style";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/page";

export default function PhotoModal() {
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
        <SinglePost />
        <CommentForm />
      </div>
    </StyledPhotoModal>
  );
}
