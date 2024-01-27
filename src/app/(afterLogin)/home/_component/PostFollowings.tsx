"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getPostFollowings } from "@/app/(afterLogin)/home/_lib/getPostFollowings";

export default function PostFollowings() {
  // 서버에서 prefetch 안함
  const { data, isPending } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getPostFollowings,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <>
      {data?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}
