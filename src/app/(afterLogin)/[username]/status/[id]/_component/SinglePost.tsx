"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";

interface UserPostsProps {
  id: string;
}
export default function SinglePost({ id }: UserPostsProps) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (error) return <div>No Data</div>;
  if (!post) return null;

  return (
    /* @ts-expect-error */
    <Post key={post.postId} post={post} />
  );
}
