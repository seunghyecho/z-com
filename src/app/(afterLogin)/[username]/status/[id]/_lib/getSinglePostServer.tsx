import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const getSinglePostServer = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, id] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
    {
      next: {
        // next 의 데이터 캐시, 강력
        // revalidate:3600, 한시간 동안 같은 값을 가지고 옴.
        tags: ["posts", id], // on-demand 에 쓰이는 태그
      },
      credentials: "include",
      headers: { Cookie: cookies().toString() }, // 서버에서도 브라우저에 쿠키 전달
      // cache: "no-store", 예를 들어서, 인기글, 팔로우글 경우 보통 캐시 사용 안함.
    }
  );

  // (on-demand)
  // revalidateTag('posts') 수동으로 초기화를 하기 전까지 캐시가 사라지지 않음.
  // revalidatePath('/home') 홈에 있을 때 캐시가 적용.

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
