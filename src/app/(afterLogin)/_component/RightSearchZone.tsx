"use client";

import {
 ReadonlyURLSearchParams,
 usePathname,
 useRouter,
 useSearchParams,
} from "next/navigation";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import {
 StyledRightSearchZone,
 StyledRightSearchFilterZone,
} from "./RightSearchZone.style";

export default function RightSearchZone() {
 const router = useRouter();
 const pathname: string = usePathname();
 const searchParams: ReadonlyURLSearchParams = useSearchParams();

 const onChangeFollow = () => {
  // let url = `/search?q=${searchParams.get("q")}&pf=on`;
  // if (searchParams.has("f")) {
  //   url += `&f=${searchParams.get("f")}`;
  // }

  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set("pf", "on");
  router.replace(`/search?${newSearchParams.toString()}`);
 };
 const onChangeAll = () => {
  // let url = `/search?q=${searchParams.get("q")}`;
  // if (searchParams.has("f")) {
  //   url += `&f=${searchParams.get("f")}`;
  // }

  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.delete("pf");
  router.replace(`/search?${newSearchParams.toString()}`);
 };

 const onChangeNearAll = () => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.delete("lf");
  router.replace(`/search?${newSearchParams.toString()}`);
 };

 const onChangeNear = () => {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set("lf", "on");
  router.replace(`/search?${newSearchParams.toString()}`);
 };

 if (pathname === "/explore") {
  return null;
 }
 if (pathname === "/search") {
  return (
   <StyledRightSearchFilterZone>
    <h5 className="filterTitle">Search Filters</h5>
    <div className="filterSection">
     <div>
      <label className="filterLabel">People</label>
      <div className="radio">
       <label htmlFor="fromAnyone">From anyone</label>
       <input
        id="fromAnyone"
        type="radio"
        name="pf"
        defaultChecked
        onChange={onChangeAll}
       />
      </div>
      <div className="radio">
       <label htmlFor="peopleYouFollow">People you follow</label>
       <input
        id="peopleYouFollow"
        type="radio"
        name="pf"
        value="on"
        onChange={onChangeFollow}
       />
      </div>
     </div>

     <div>
      <label className="filterLabel">Location</label>
      <div className="radio">
       <label htmlFor="anywhere">Anywhere</label>
       <input
        id="anywhere"
        type="radio"
        name="lf"
        defaultChecked
        onChange={onChangeNearAll}
       />
      </div>
      <div className="radio">
       <label htmlFor="nearYou">Near you</label>
       <input
        id="nearYou"
        type="radio"
        name="lf"
        value="on"
        onChange={onChangeNear}
       />
      </div>
     </div>
    </div>
   </StyledRightSearchFilterZone>
  );
 }
 return (
  <StyledRightSearchZone>
   <SearchForm />
  </StyledRightSearchZone>
 );
}
