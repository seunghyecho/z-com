"use client";

import { StyledBackButton } from "./BackButton.style";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <StyledBackButton onClick={onClickClose}>
      <IoMdArrowRoundBack size={20} color={"#000"} />
    </StyledBackButton>
  );
}
