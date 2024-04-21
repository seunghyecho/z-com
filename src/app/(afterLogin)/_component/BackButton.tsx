"use client";

import { StyledBackButton } from "./BackButton.style";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onClickBack = () => {
    console.log(1);
    router.back();
  };
  return (
    <StyledBackButton onClick={onClickBack}>
      <IoMdArrowRoundBack size={20} color={"#000"} />
    </StyledBackButton>
  );
}
