"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Post } from "@/model/Post";

interface PostArticleProps {
  children: ReactNode;
  post: Post;
}
export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();
  let target: Post = post;
  // 재게시글이 있을경우
  if (post.Original) {
    target = post.Original;
  }
  const onClick = () => {
    router.push(`${target.User.id}/status/${target.postId}`);
  };
  return (
    <article className="postArticle" onClick={onClick}>
      {children}
    </article>
  );
}
