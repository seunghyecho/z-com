"use client";

import { Trend } from "@/model/Trend";
import { StyledTrend } from "./Trend.style";

interface TrendProps {
 trend: Trend;
}
export default function Trend({ trend }: TrendProps) {
 // 주소창 특수문자 변환 필요 :encodeURIComponent
 return (
  <StyledTrend
   href={`/search?q=${encodeURIComponent(trend.title)}`}
   className="container"
  >
   <div className="title">{trend.title}</div>
   <div className="posts">
    <span>{trend.count.toLocaleString()} posts</span>
   </div>
  </StyledTrend>
 );
}
