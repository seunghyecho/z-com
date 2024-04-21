import { cookies } from "next/headers";
import { Room } from "@/model/Room";

// 현재 참여중인 방들
export async function getRooms(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}/rooms`,
    {
      next: {
        tags: ["rooms", id],
      },
      credentials: "include",
      headers: { Cookie: cookies().toString() }, // 내 방 가져오기, credentials + headers 서버 컴포넌트에서 쓰이는 경우
      cache: "no-store", // 캐시 비활성화
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Room[]>;
}
