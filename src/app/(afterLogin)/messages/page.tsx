import { Metadata } from "next";
import { StyledMessages } from "./messages.style";
import Room from "./_component/Room";

export const metadata: Metadata = {
  title: "Message / Z",
  description: "Send Message.",
};

export default function Home() {
  return (
    <StyledMessages className="main">
      <div className="header">
        <h3>Message</h3>
      </div>
      <Room />
    </StyledMessages>
  );
}
