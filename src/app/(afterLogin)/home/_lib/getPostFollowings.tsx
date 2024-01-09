export async function getPostFollowings() {
  const res = await fetch("http://localhost:9090/api/postFollowings", {
    next: {
      tags: ["posts", "followings"],
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
