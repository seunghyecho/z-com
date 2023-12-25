import { IoMdArrowRoundBack } from "react-icons/io";
import { StyledBackButton } from "./BackButton.style";

export default function BackButton() {
  return (
    <StyledBackButton>
      <IoMdArrowRoundBack size={20} />
    </StyledBackButton>
  );
}
