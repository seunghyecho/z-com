"use client";

import { useEffect, useState } from "react";
import Trend, { TrendProps } from "@/app/(afterLogin)/_component/Trend";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

import { StyledExplore } from "./explore.style";
export default function Home() {
  const [trendList, setTrendList] = useState<TrendProps[]>();

  const init = () => {
    const initTrend = [];
    for (let i = 1; i < 11; i++) {
      initTrend.push({
        post: "실시간 트렌드",
        title: "title",
        count: 1234,
      });
    }
    setTrendList(initTrend);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <StyledExplore className="main">
      <div className="formZone">
        <SearchForm />
      </div>

      <div className="trend">
        <h3>Trend For Me</h3>
        {trendList?.map((item, idx) => {
          const { post, title, count } = item;

          return <Trend key={idx} post={post} title={title} count={count} />;
        })}
      </div>
    </StyledExplore>
  );
}
