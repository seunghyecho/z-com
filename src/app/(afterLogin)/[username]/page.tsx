"use client";

import Image from "next/image";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import { me } from "@/app/const/common";
import { StyledProfile } from "./profile.style";

export default function Profile() {
  return (
    <StyledProfile className="main">
      <div className="header">
        <BackButton />
        <h3 className="headerTitle">{me.nickname}</h3>
      </div>
      <div className="userZone">
        <div className="userImage">
          <Image src={me.image} alt={me.id} />
        </div>
        <div className="userName">
          <div>{me.nickname}</div>
          <div>@{me.id}</div>
        </div>
        <button className="followButton">Follow</button>
      </div>

      <Post />
    </StyledProfile>
  );
}
