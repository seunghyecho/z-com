"use client";

import { CgSearchLoading } from "react-icons/cg";
import { StyledSearchForm } from "./SearchForm.style";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

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
    <StyledSearchForm onSubmit={onSubmit} className="search">
      <CgSearchLoading size={25} />
      <input name="search" type="search" />
    </StyledSearchForm>
  );
}
