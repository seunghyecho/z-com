"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { StyledPostArticle } from "./PostArticle.style";

interface PostArticleProps {
  children: ReactNode;
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    Images: any[];
    createdAt: Date;
    content: string;
  };
}
export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`${post.User?.id}/status/${post.postId}`);
  };
  return (
    <StyledPostArticle className="post" onClickCapture={onClick}>
      {children}
    </StyledPostArticle>
  );
}
