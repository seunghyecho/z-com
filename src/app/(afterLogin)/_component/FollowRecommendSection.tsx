"use client";

import FollowRecommend from "./FollowRecommend";
import { getFollowRecommends } from "@/app/(afterLogin)/_lib/getFollowRecommends";
import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import { StyledFollowRecommendSection } from "./FollowRecommendSection.style";

export default function FollowRecommendSection() {
 const { data } = useQuery<User[]>({
  queryKey: ["users", "followRecommends"],
  queryFn: getFollowRecommends,
  staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
  gcTime: 300 * 1000,
 });

 return (
  <StyledFollowRecommendSection>
   <h3>Who to follow</h3>
   {data?.map((user: User, idx: number) => {
    return <FollowRecommend key={idx} user={user} />;
   })}
  </StyledFollowRecommendSection>
 );
}
