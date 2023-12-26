"use client";

import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/search/_component/Tab";

interface SearchProps {
  searchParams: { q: string; f?: string; pf?: string };
}
export default function Search({ searchParams }: SearchProps) {
  return (
    <main className="main">
      <div className="searchTop">
        <div className="searchZone">
          <div className="buttonZone">
            <BackButton />
          </div>
          <div className="formZone">
            <SearchForm q="" />
          </div>
        </div>
        <Tab />
      </div>
      <div className="list">{/* SearchResult */}</div>
    </main>
  );
}
