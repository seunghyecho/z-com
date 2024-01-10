"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Post } from "@/model/Post";
import { StyledPostArticle } from "./PostArticle.style";

interface PostArticleProps {
  children: ReactNode;
  post: Post;
}
export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`${post.User.id}/status/${post.postId}`);
  };
  return (
    <StyledPostArticle className="post" onClickCapture={onClick}>
      {children}
    </StyledPostArticle>
  );
}
