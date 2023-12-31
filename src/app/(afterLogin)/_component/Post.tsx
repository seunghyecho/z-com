import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import { StyledPost } from "./Post.style";

import ActionButton from "./ActionButton";
import PostArticle from "./PostArticle";

import DefaultProfile from "../../../../public/assets/images/image_profile_00.svg";

import { faker } from "@faker-js/faker";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
import PostImages from "./PostImages";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface PostProps {
  noImage?: boolean;
}

export default function Post({ noImage }: PostProps) {
  const target = {
    postId: 1,
    User: {
      id: "shcho",
      nickname: "shcho",
      image: DefaultProfile,
    },
    Images: [] as any[],
    createdAt: new Date(),
    content: "이렇게 게시되는 글 입니다.",
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }
  return (
    <PostArticle post={target}>
      <StyledPost>
        <div className="postWrapper">
          <div className="postUserSection">
            <Link href={target.User.id} className="postUserImage">
              <img src={target.User.image.src} alt="" />
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
