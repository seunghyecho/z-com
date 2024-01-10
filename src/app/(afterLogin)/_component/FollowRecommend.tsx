"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { StyledFollowRecommend } from "./FollowRecommend.style";
import { getFollowRecommends } from "@/app/(afterLogin)/_lib/getFollowRecommends";
import { User } from "@/model/User";

export default function FollowRecommend() {
  const { data } = useQuery<User[]>({
    queryKey: ["users", "followRecommends"],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  const onFollow = () => {};

  return (
    <StyledFollowRecommend className="followRecommend">
      <h3>Follow Recommend</h3>
      {data?.map((user, idx) => {
        return (
          <div className="container" key={idx}>
            <div className="userLogoSection">
              <div className="userLogo">
                <img src={user?.image} alt={user?.id} />
              </div>
              <div className="userInfo">
                <div className="title">{user?.id}</div>
                <div className="count">@{user?.nickname}</div>
              </div>
            </div>
            <div className="followButtonSection">
              <button onClick={onFollow}>Follow</button>
            </div>
          </div>
        );
      })}
    </StyledFollowRecommend>
  );
}
