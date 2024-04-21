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
import { getUserServer } from "@/app/(afterLogin)/[username]/_lib/getUserServer";
import { getSinglePostServer } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePostServer";

interface Props {
  params: { id: string; username: string };
}

/**
 * export const dynamic = 'force-dynamic';
 * 이 페이지에서 보내는 요청을 캐싱하지 않겠다.
 * 라이브러리 사용 시.
 */

/**
 * getSinglePostServer 경우,
 * 서버에서 2번 요청 될 걸, next 에서 알아서 1번 요청함.
 */

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
    openGraph: {
      title: `${user.nickname} : ${post.content}`,
      description: post.content,
      images:
        post.Images.length > 0
          ? post.Images?.map((v) => ({
              url: `http://z.nodebird.com${v.link}`, // /upload
              width: 600,
              height: 400,
            }))
          : [
              {
                url: `http://z.nodebird.com${user.image}`, // /upload
                width: 400,
                height: 400,
              },
            ],
    },
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
          {/* @ts-ignore  */}
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
