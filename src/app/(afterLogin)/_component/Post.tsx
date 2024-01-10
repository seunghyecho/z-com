"use client";

import Image from "next/image";
import Link from "next/link";
import { StyledPost } from "./Post.style";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
import { Post } from "@/model/Post";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface PostProps {
  noImage?: boolean;
  post: Post;
}

export default function Post({ noImage, post }: PostProps) {
  let target = post;
  if (!post) return;

  return (
    <PostArticle post={target}>
      <StyledPost>
        <div className="postWrapper">
          <div className="postUserSection">
            <Link href={target.User.id} className="postUserImage">
              <img src={target.User.image} alt={target.User.id} />
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
              <PostImages post={target} />
            </div>
            <ActionButton />
          </div>
        </div>
      </StyledPost>
    </PostArticle>
  );
}
