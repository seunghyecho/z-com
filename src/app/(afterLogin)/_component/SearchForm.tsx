import { CgSearchLoading } from "react-icons/cg";
export default function SearchForm() {
  return (
    <form action="" className="search">
      <CgSearchLoading size={25} />
      <input type="search" />
    </form>
  );
}
