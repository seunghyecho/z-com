"use client";

import { useContext } from "react";
import { StyledTab } from "./Tab.style";
import { TabContext } from "@/app/(afterLogin)/home/_component/TabProvider";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};

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
        <div className="homeText">Home</div>
        <div className="homeTab">
          <div onClick={onClickRecommend}>
            Recommend
            <div className="tabIndicator" hidden={tab === "following"}></div>
          </div>
          <div onClick={onClickFollowing}>
            Following
            <div className="tabIndicator" hidden={tab === "recommend"}></div>
          </div>
        </div>
      </div>
    </StyledTab>
  );
}
