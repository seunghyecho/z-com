"use client";

import { CgSearchLoading } from "react-icons/cg";

interface SearchFormProps {
  q?: string;
}
export default function SearchForm({ q }: SearchFormProps) {
  return (
    <form action="" className="search">
      <CgSearchLoading size={25} />
      <input type="search" />
    </form>
  );
}
