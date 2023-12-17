import { StyledTrend } from "./Trend.style";

export interface TrendProps {
  post: string;
  title: string;
  count: number;
}
export default function Trend({ post, title, count }: TrendProps) {
  return (
    <StyledTrend href={`/search?q=trend`} className="container">
      <div className="count">{post}</div>
      <div className="title">{title}</div>
      <div className="count">{count} posts</div>
    </StyledTrend>
  );
}
