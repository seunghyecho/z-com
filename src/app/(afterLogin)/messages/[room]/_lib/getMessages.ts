import { Message } from "@/model/Message";

interface GetMessagesProps {
  pageParam?: number;
  queryKey: [string, { senderId: string; receiverId: string }, string];
}
export async function getMessages({ pageParam, queryKey }: GetMessagesProps) {
  const [_, userInfo, roomId] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userInfo.senderId}/rooms/${userInfo.receiverId}?cursor=${pageParam}`,
    {
      next: {
        tags: ["rooms"],
      },
      credentials: "include",
      cache: "no-store", // 캐시 비활성화
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Message[]>;
}
