"use client";

import Image from "next/image";

import { StyledProfile } from "./profile.style";

import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";

import { me } from "@/app/const/common";

export default function Profile() {
  return (
    <StyledProfile>
      <div className="header">
        <BackButton />
        <h3 className="headerTitle">{me.nickname}</h3>
      </div>
      <div className="userZone">
        <div className="userImage">
          <img src={me.image.src} alt={me.id} />
        </div>
        <div className="userName">
          <h2>{me.nickname}</h2>
          <div>@{me.id}</div>
        </div>
        <button className="followButton">Follow</button>
      </div>

      <Post />
    </StyledProfile>
  );
}
