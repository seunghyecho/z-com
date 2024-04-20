export const getTrends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`,
    {
      next: {
        tags: ["trends"],
      },
      credentials: "include", // 403 요청 실패 시, 쿠키 필요
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
