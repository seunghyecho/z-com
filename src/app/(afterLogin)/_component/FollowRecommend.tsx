"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledFollowRecommend } from "./FollowRecommend.style";

interface FollowProps {
  id: string;
  nickname: string;
  image: string;
}
export default function FollowRecommend() {
  const onFollow = () => {};

  const [followList, setFollowList] = useState<FollowProps[]>([]);
  const init = () => {
    const initFollowList = [];
    for (let i = 1; i < 6; i++) {
      initFollowList.push({
        id: "id111",
        nickname: "nickname111",
        image: "",
      });
    }
    setFollowList(initFollowList);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <StyledFollowRecommend className="followRecommend">
      <h3>Follow Recommend</h3>
      {followList.map((item, idx) => {
        return (
          <div className="container" key={idx}>
            <div className="userLogoSection">
              <div className="userLogo">
                <img src={item.image.src} alt={item.id} />
              </div>
              <div className="userInfo">
                <div className="title">{item.id}</div>
                <div className="count">@{item.nickname}</div>
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
