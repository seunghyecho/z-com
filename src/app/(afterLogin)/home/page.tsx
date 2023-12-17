"use client";

import { StyledHome } from "./home.style";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <StyledHome>
      <TabProvider>
        <Tab />
      </TabProvider>
    </StyledHome>
  );
}
