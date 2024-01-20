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

    // let url = `/search?q=${searchParams.get("q")}`;
    // if (searchParams.has("pf")) {
    //   url += `&pf=${searchParams.get("pf")}`;
    // }

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onClickNew = () => {
    setCurrent("new");

    // let url = `/search?q=${searchParams.get("q")}&f=live`;
    // if (searchParams.has("pf")) {
    //   url += `&pf=${searchParams.get("pf")}`;
    // }

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "live");
    router.replace(`/search?${newSearchParams.toString()}`);
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
