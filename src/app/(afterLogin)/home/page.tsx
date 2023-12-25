"use client";

import { StyledHome } from "./home.style";

import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";

/**
 * 메인 홈 페이지
 * @returns
 */
export default function Home() {
  return (
    <StyledHome>
      <TabProvider>
        <Tab />

        <PostForm />

        <Post />
        <Post />
        <Post />
      </TabProvider>
    </StyledHome>
  );
}
