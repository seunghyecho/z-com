"use client";

import { StyledHome } from "./home.style";

import TabProvider from "./_component/TabProvider";

import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "./_component/Post";

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
