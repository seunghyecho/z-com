"use client";

import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getPostFollowings } from "@/app/(afterLogin)/home/_lib/getPostFollowings";
import React, { useEffect } from "react";
import { pages } from "next/dist/build/templates/app-page";

export default function PostFollowings() {
  // 서버에서 prefetch 안함
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery<
      IPost[],
      Object,
      InfiniteData<IPost[]>,
      [_1: string, _2: string],
      number
    >({
      queryKey: ["posts", "followings"],
      queryFn: getPostFollowings,
      initialPageParam: 0,
      getNextPageParam: (lastPage: IPost[]) => lastPage.at(-1)?.postId,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page: IPost[], i: number) => (
        <React.Fragment key={i}>
          {page.map((post: IPost) => (
            <Post key={post.postId} post={post} />
          ))}
        </React.Fragment>
      ))}
      아래 돔을 인지했나?
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
