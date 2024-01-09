"use client";

import { useContext } from "react";
import { TabContext } from "@/app/(afterLogin)/home/_component/TabProvider";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";
import PostFollowings from "@/app/(afterLogin)/home/_component/PostFollowings";

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === "recommend") {
    return <PostRecommends />;
  }
  return <PostFollowings />;
}
