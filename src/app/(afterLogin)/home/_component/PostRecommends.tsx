"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage: IPost[]) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0, //문턱, 보이자 마자 호출
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, fetchNextPage, fetchNextPage]);

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
