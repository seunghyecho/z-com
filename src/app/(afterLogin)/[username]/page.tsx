import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getUserServer } from "@/app/(afterLogin)/[username]/_lib/getUserServer";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import UserPosts from "@/app/(afterLogin)/[username]/_component/UserPosts";
import UserInfo from "@/app/(afterLogin)/[username]/_component/UserInfo";
import { auth } from "@/auth";

interface ProfileProps {
  params: { username: string };
}
export default async function Profile({ params }: ProfileProps) {
  const { username } = params;
  const session = await auth();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUserServer,
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    initialPageParam: 0, // cursor 값
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="main">
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} session={session} />
        {/* @ts-expect-error */}
        <UserPosts username={username} />
      </HydrationBoundary>
    </div>
  );
}
