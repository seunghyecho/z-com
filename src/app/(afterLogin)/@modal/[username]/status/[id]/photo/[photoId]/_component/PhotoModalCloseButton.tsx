"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { StyledPhotoModalCloseButton } from "./PhotoModalCloseButton.style";

export default function PhotoModalCloseButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <StyledPhotoModalCloseButton className="closeButton" onClick={onClick}>
      <IoMdArrowRoundBack size={20} color={"#000"} />
    </StyledPhotoModalCloseButton>
  );
}
