"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/model/Post";
import { StyledPost } from "./Post.style";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import PostImages from "@/app/(afterLogin)/_component/PostImages";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
import { MouseEventHandler } from "react";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface PostProps {
  noImage?: boolean;
  post: Post;
}

export default function Post({ noImage, post }: PostProps) {
  let target = post;
  // 재게시 원글일 경우
  if (post.Original) {
    target = post.Original;
  }

  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <PostArticle post={target}>
      <StyledPost>
        {post.Original && (
          <div className="postReposted">
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
              </g>
            </svg>
            재게시했습니다.
          </div>
        )}

        <div className="postWrapper">
          <div className="postUserSection">
            <Link
              href={`/${target?.User?.id}`}
              className="postUserImage"
              onClick={stopPropagation}
            >
              <img src={target?.User?.image} alt={target?.User?.id} />
              <div className="postShade" />
            </Link>
          </div>
          <div className="postBody">
            <div className="postMeta">
              <Link href={`/${target?.User?.id}`} onClick={stopPropagation}>
                <span className="postUserName">{target?.User?.nickname}</span>
                <span className="postUserId">@{target?.User?.id}</span>
                <span className="postBar"> | </span>
                <span className="postDate">
                  {dayjs(target.createdAt).fromNow(true)}
                </span>
              </Link>
            </div>
            {target?.Parent && (
              <Link
                href={`/${target.Parent.User.id}`}
                onClick={stopPropagation}
              >
                @{target.Parent.User.id}에게 보내는 답글
              </Link>
            )}
            <div>{target.content}</div>
            <div className="postImageSection">
              {!noImage && (
                <div>
                  <PostImages post={target} />
                </div>
              )}
            </div>
            <ActionButton post={post} />
          </div>
        </div>
      </StyledPost>
    </PostArticle>
  );
}
