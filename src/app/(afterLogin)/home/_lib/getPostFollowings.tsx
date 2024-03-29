interface Props {
  pageParam?: number;
}
export async function getPostFollowings({ pageParam }: Props) {
  const res = await fetch(
    `http://localhost:9090/api/posts/followings?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "followings"],
      },
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
