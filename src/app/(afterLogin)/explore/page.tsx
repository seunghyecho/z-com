"use client";

import { useQuery } from "@tanstack/react-query";
import { StyledExplore } from "./explore.style";
import Trend from "@/app/(afterLogin)/_component/Trend";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import { Trend as ITrend } from "@/model/Trend";

export default function Home() {
  const { data } = useQuery<ITrend[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <StyledExplore>
      <div className="formZone">
        <SearchForm />
      </div>

      <div className="trend">
        <h3>Trend For You</h3>
        {data?.map((trend, index) => (
          <Trend key={index} trend={trend} />
        ))}
      </div>
    </StyledExplore>
  );
}
