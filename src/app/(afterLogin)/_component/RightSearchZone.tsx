"use client";

import { usePathname } from "next/navigation";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

import { StyledRightSearchZone } from "./RightSearchZone.style";
export default function RightSearchZone() {
  const pathname = usePathname();
  const onChangeAll = () => {};
  const onChangeFollow = () => {};

  if (pathname === "/explore") {
    return null;
  }
  if (pathname === "/search") {
    return (
      <StyledRightSearchZone>
        <h5 className="filterTitle">검색 필터</h5>
        <div className={"filterSection"}>
          <div>
            <label>사용자</label>
            <div className={"radio"}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={"radio"}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </StyledRightSearchZone>
    );
  }
  return (
    <StyledRightSearchZone>
      <SearchForm />
    </StyledRightSearchZone>
  );
}