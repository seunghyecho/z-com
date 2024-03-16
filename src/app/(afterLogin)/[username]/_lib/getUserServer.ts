import { cookies } from "next/headers";
import { User } from "@/model/User";
import { QueryFunction } from "@tanstack/react-query";
export const getUserServer: QueryFunction<
  User,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(`http://localhost:9090/api/users/${username}`, {
    next: {
      tags: ["users", username],
    },
    credentials: "include",
    headers: { Cookie: cookies().toString() }, // 서버에서도 브라우저에 쿠키 전달
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
