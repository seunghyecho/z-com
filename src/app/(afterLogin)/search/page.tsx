import Tab from "@/app/(afterLogin)/search/_component/Tab";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import SearchResult from "@/app/(afterLogin)/search/_component/SearchResult";
import { StyledSearch } from "./search.style";
import { Metadata } from "next";

interface Props {
  searchParams: { q: string; f?: string; pf?: string };
}

// 동적 메타 데이터
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `${searchParams.q} - Search / Z`,
    description: `${searchParams.q} - Search / Z`,
  };
}
export default function Search({ searchParams }: Props) {
  return (
    <StyledSearch className="main">
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
      <div className="list">
        {/* @ts-expect-error */}
        <SearchResult searchParams={searchParams} />
      </div>
    </StyledSearch>
  );
}
