"use client";

import React from "react";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import FollowRecommendSection from "@/app/(afterLogin)/_component/FollowRecommendSection";
import { auth } from "@/auth"; // server component 에서
import { StyledRightSection } from "./RightSection.style";

export default function RightSection() {
 return (
  <StyledRightSection>
   <RightSearchZone />
   <TrendSection />
   <FollowRecommendSection />
  </StyledRightSection>
 );
}
