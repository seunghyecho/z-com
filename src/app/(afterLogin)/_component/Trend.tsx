import { Trend } from "@/model/Trend";
import { StyledTrend } from "./Trend.style";

interface TrendProps {
  trend: Trend;
}
export default function Trend({ trend }: TrendProps) {
  return (
    <StyledTrend href={`/search?q=${trend.title}`} className="container">
      <div className="count">{trend.post}</div>
      <div className="title">{trend.title}</div>
      <div className="posts">
        {trend.count.toLocaleString()} <span>posts</span>
      </div>
    </StyledTrend>
  );
}
