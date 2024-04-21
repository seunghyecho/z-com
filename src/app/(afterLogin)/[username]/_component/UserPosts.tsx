"use client";

import {
  InfiniteData,
  useQueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Post from "@/app/(afterLogin)/_component/Post";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import { Post as IPost } from "@/model/Post";

interface UserPostsProps {
  username: string;
}
export default function UserPosts({ username }: UserPostsProps) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery<
      IPost[],
      Object,
      InfiniteData<IPost[]>,
      [_1: string, _2: string, _3: string],
      number
    >({
      queryKey: ["posts", "users", username],
      queryFn: getUserPosts,
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

  if (user) {
    return (
      <>
        {data?.pages.map((page: IPost[], i: number) => (
          <React.Fragment key={i}>
            {!page && <>{/*post 가 없을 떄 답글 도 없는 경우  */}</>}

            {page.map((post: IPost) => (
              <Post key={post.postId} post={post} />
            ))}
          </React.Fragment>
        ))}
        아래 돔을 인지했나?
        <div ref={ref} style={{ height: 50 }} />
      </>
    );
  } else {
    return <></>;
  }
}
