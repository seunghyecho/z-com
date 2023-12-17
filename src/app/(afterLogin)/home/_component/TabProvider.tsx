"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "recommend",
  setTab: (value: "recommend" | "following") => {},
});

interface TabProviderProps {
  children: ReactNode;
}
export default function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState("");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
