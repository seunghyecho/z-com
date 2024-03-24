"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"; // client component 에서
import { useQuery } from "@tanstack/react-query";
import { StyledTrendSection } from "./TrendSection.style";
import Trend from "@/app/(afterLogin)/_component/Trend";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import { Trend as ITrend } from "@/model/Trend";

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { data } = useQuery<ITrend[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user,
  });

  if (pathname === "/explore") return null;
  if (session?.user) {
    return (
      <StyledTrendSection className="trendBg">
        <div className="trend">
          <h3 className="trendForYou"> 트렌드 추천</h3>
          {data?.map((trend, index) => (
            <Trend key={index} trend={trend} />
          ))}
        </div>
      </StyledTrendSection>
    );
  }
  return (
    <StyledTrendSection className="trendBg">
      <div className="noTrend">트렌드 추천이 없어요</div>
    </StyledTrendSection>
  );
}
