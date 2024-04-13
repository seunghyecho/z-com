import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { User } from "@/model/User";
import { Post } from "@/model/Post";
import { getUserServer } from "../../_lib/getUserServer";
import { getSinglePostServer } from "./_lib/getSinglePostServer";

interface Props {
  params: { id: string; username: string };
}

// getSinglePostServer 경우, 서버에서 2번 요청 될 걸, next 에서 알아서 1번 요청 하도록 캐싱 적용

export async function generateMetadata({ params }: Props) {
  const user: User = await getUserServer({
    queryKey: ["users", params.username],
  });
  const post: Post = await getSinglePostServer({
    queryKey: ["posts ", params.id],
  });
  return {
    title: `${user.nickname} : ${post.content}`,
    description: post.content,
  };
}
export default async function Page({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePostServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="main">
      <HydrationBoundary state={dehydratedState}>
        <div className="header">
          <BackButton />
          <h3 className="headerTitle">username/status/:id 게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />

        <div>
          {/* @ts-expect-error */}
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
