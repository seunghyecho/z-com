import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabDecider from "@/app/(afterLogin)/home/_component/TabDecider";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";

/** 메인 (홈) */

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0, // cursor 값
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="main">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          {/* @ts-expect-error */}
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
