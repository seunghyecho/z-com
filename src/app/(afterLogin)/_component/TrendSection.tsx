import { useEffect, useState } from "react";
import Trend, { TrendProps } from "./Trend";
import { StyledTrendSection } from "./TrendSection.style";

export default function TrendSection() {
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
    <StyledTrendSection className="trendBg">
      {/* 실시간 트렌드 */}
      <div className="trend">
        <h3>Trend</h3>
        {trendList?.map((item, idx) => {
          const { post, title, count } = item;

          return <Trend key={idx} post={post} title={title} count={count} />;
        })}
      </div>
    </StyledTrendSection>
  );
}
