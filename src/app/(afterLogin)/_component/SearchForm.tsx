"use client";

import { FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { CgSearchLoading } from "react-icons/cg";
import { StyledSearchForm } from "./SearchForm.style";

interface SearchFormProps {
 q?: string;
}
export default function SearchForm({ q }: SearchFormProps) {
 const router = useRouter();
 const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  router.push(`search?q=${e.currentTarget.search.value}`);
 };
 return (
  <StyledSearchForm onSubmit={onSubmit}>
   <CgSearchLoading size={25} />
   <input name="search" type="search" className="searchFormInput" />
  </StyledSearchForm>
 );
}
