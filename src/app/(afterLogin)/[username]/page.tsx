"use client";

import Image from "next/image";
import { StyledProfile } from "./profile.style";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import { useSession } from "next-auth/react";
import { me } from "@/app/const/common";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession();

  const onClickFollow = () => {
    if (!session?.user) {
      router.replace("/login");
    }
  };
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

        <button className="followButton" onClick={onClickFollow}>
          Follow
        </button>
      </div>

      <Post />
    </StyledProfile>
  );
}
