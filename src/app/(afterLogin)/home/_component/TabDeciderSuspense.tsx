import {
 QueryClient,
 dehydrate,
 HydrationBoundary,
} from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "@/app/(afterLogin)/home/loading";
import TabDecider from "@/app/(afterLogin)/home/_component/TabDecider";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";

export default async function TabDeciderSuspense() {
 const queryClient = new QueryClient();

 await queryClient.prefetchInfiniteQuery({
  queryKey: ["posts", "recommends"],
  queryFn: getPostRecommends,
  initialPageParam: 0, // cursor 값
 });

 const dehydratedState = dehydrate(queryClient);
 return (
  <>
   <Suspense fallback={<Loading />}>
    <HydrationBoundary state={dehydratedState}>
     <TabDecider />
    </HydrationBoundary>
   </Suspense>
  </>
 );
}
