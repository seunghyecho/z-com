"use client";

import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    /**
     * 에러 이슈 :
     * 브라우저에서 실행될 때(typeof window가 'undefined') 조건 추가
     */

    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
