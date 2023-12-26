import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import { StyledPost } from "./Post.style";

import ActionButton from "./ActionButton";
import PostArticle from "./PostArticle";

import { faker } from "@faker-js/faker";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

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
      image: "",
    },
    Images: [] as any[],
    createdAt: new Date(),
    content: "이렇게 게시되는 글 입니다.",
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
  }
  return (
    <PostArticle post={target}>
      <StyledPost>
        <div className="postWrapper">
          <div className="postUserSection">
            <Link href={target.User.id} className="postUserImage">
              <img src={target.User.image} alt="" />
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
              {target.Images && target.Images.length > 0 && (
                <div className="postImageSection">
                  <Link
                    href={`/${target.User.id}/${target.postId}/photo/${target.Images[0].imageId}`}
                    className="postImageSection"
                  >
                    <img src={target.Images[0]?.link} alt="" />
                  </Link>
                </div>
              )}
            </div>

            <ActionButton />
          </div>
        </div>
      </StyledPost>
    </PostArticle>
  );
}
