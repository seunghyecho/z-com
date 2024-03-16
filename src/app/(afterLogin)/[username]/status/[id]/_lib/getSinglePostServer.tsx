import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";
import { cookies } from "next/headers";
export const getSinglePostServer = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, id] = queryKey;
  const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
    next: {
      tags: ["posts", id],
    },
    credentials: "include",
    headers: { Cookie: cookies().toString() }, // 서버에서도 브라우저에 쿠키 전달
    // cache: "no-store", 새로고침해도 같은 데이터를 가지고 옴.
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
