"use client";

import { useState } from "react";
import { StyledTab } from "./Tab.style";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};

export default function Tab() {
  const [tab, setTab] = useState("recommend");
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
