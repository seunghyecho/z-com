"use client";

import { useContext } from "react";
import { StyledTab } from "./Tab.style";
import { TabContext } from "@/app/(afterLogin)/home/_component/TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickRecommend = () => {
    setTab("recommend");
  };
  const onClickFollowing = () => {
    setTab("following");
  };

  return (
    <StyledTab>
      <div className="homeFixed">
        <div className="homeText" hidden>
          Home
        </div>
        <div className="homeTab">
          <div onClick={onClickRecommend}>
            추천 글
            <div className="tabIndicator" hidden={tab === "following"}></div>
          </div>
          <div onClick={onClickFollowing}>
            팔로잉 글
            <div className="tabIndicator" hidden={tab === "recommend"}></div>
          </div>
        </div>
      </div>
    </StyledTab>
  );
}
