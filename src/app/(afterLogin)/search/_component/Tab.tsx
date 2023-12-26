"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { StyledTab } from "./Tab.style";

export default function Tab() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [current, setCurrent] = useState("hot");

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };
  return (
    <StyledTab className="homeFixed">
      <div className="homeTab">
        <div onClick={onClickHot}>
          Hot
          <div className="tabIndicator" hidden={current !== "hot"}></div>
        </div>
        <div onClick={onClickNew}>
          New
          <div className="tabIndicator" hidden={current !== "new"}></div>
        </div>
      </div>
    </StyledTab>
  );
}
