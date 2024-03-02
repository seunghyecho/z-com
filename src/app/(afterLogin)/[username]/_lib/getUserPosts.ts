import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

interface Props {
  queryKey?: any;
  pageParam?: number;
}

export async function getUserPosts({ queryKey, pageParam }: Props) {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `http://localhost:9090/api/users/${username}/posts?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "users", username],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
