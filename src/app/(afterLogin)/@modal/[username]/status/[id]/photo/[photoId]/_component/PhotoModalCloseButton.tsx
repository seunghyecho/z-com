"use client";

import { useRouter } from "next/navigation";
import { SlClose } from "react-icons/sl";
import { StyledPhotoModalCloseButton } from "./PhotoModalCloseButton.style";

export default function PhotoModalCloseButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <StyledPhotoModalCloseButton className="closeButton" onClick={onClick}>
      <SlClose size={20} color={"#fff"} />
    </StyledPhotoModalCloseButton>
  );
}
