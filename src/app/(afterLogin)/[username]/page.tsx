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
import { User } from "@/model/User";

interface Props {
  params: { username: string };
}
export async function generateMetadata({ params }: Props) {
  const user: User = await getUserServer({
    queryKey: ["users", params.username],
  });
  return {
    title: `${user.nickname} (${user.id}) / Z`,
    description: `${user.nickname} (${user.id}) Profile`,
    openGraph: {
      title: `${user.nickname} (${user.id}) / Z`,
      description: `${user.nickname} (${user.id}) Profile`,
      images: [
        {
          url: `http://z.nodebird.com${user.image}`, // /upload, TODO, 배포 url로 수정하기
          width: 400,
          height: 400,
        },
      ],
    },
  };
}
export default async function Profile({ params }: Props) {
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
        <UserPosts username={username} />
      </HydrationBoundary>
    </div>
  );
}
