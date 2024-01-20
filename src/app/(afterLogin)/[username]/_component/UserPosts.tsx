"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import { Post as IPost } from "@/model/Post";

interface UserPostsProps {
  username: string;
}
export default function UserPosts({ username }: UserPostsProps) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  // post 가 없을 떄 답글 도 없는 경우
  return null;
}
