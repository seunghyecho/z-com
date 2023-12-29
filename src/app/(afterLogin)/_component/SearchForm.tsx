"use client";

import { CgSearchLoading } from "react-icons/cg";
import { StyledSearchForm } from "./SearchForm.style";

interface SearchFormProps {
  q?: string;
}
export default function SearchForm({ q }: SearchFormProps) {
  return (
    <StyledSearchForm action="" className="search">
      <CgSearchLoading size={25} />
      <input type="search" />
    </StyledSearchForm>
  );
}
