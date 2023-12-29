"use client";

import { StyledBackButton } from "./BackButton.style";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  return (
    <StyledBackButton>
      <IoMdArrowRoundBack size={20} color={"#000"} />
    </StyledBackButton>
  );
}
