"use client";

import Link from "next/link";
import dayjs from "dayjs";

import { StyledPost } from "./Post.style";

import ActionButton from "./ActionButton";

import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
import Image from "next/image";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export const target = {
  User: {
    id: "shcho",
    nickname: "shcho",
    image: "",
  },
  Images: [],
  createdAt: new Date(),
  content: "이렇게 게시되는 글 입니다.",
};
export default function Post() {
  return (
    <StyledPost className="post">
      <div className="postWrapper">
        <div className="postUserSection">
          <Link href={target.User.id} className="postUserImage">
            <Image src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className="postShade" />
        </div>
        <div className="postBody">
          <div className="postMeta">
            <Link href={`/${target.User.id}`}>
              <span className="postUserName">{target.User.nickname}</span>
              <span className="postUserId">@{target.User.id}</span>
              <span className="postBar"> | </span>
              <span className="postDate">
                {dayjs(target.createdAt).fromNow(true)}
              </span>
            </Link>
          </div>
          <div>{target.content}</div>
          <div className="postImageSection">
            {target.Images.length > 0 && (
              <div className="postImageSection">
                {target.Images.map((item, idx) => {
                  if (!item) return;
                  return <Image key={idx} src="" alt="" />;
                })}
              </div>
            )}
          </div>

          <ActionButton />
        </div>
      </div>
    </StyledPost>
  );
}
