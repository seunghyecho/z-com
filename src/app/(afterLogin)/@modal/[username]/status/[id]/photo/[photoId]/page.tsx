"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";

import { StyledPhotoModal } from "./photoModal.style";
import { photo } from "@/app/const/common";

interface PhotoModalProps {
  params: {
    id: string;
    username: string;
    photoId: string;
  };
}

// 현재 페이지 : http://localhost:3000/shcho/status/1/photo/1

export default function PhotoModal({ params }: PhotoModalProps) {
  return (
    <StyledPhotoModal className="container">
      <PhotoModalCloseButton />
      <div className="imageZone">
        <img src={photo.link} alt={photo.Post?.content} />
        <div
          className="image"
          style={{ backgroundImage: `url(${photo.link})` }}
        />
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
