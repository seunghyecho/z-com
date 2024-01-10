import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import UserPosts from "@/app/(afterLogin)/[username]/_component/UserPosts";
import UserInfo from "@/app/(afterLogin)/[username]/_component/UserInfo";

interface ProfileProps {
  params: { username: string };
}
export default async function Profile({ params }: ProfileProps) {
  const { username } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="main">
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        {/* @ts-expect-error */}
        <UserPosts username={username} />
      </HydrationBoundary>
    </div>
  );
}
