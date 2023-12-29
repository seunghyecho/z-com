"use client";

import { StyledMessages } from "./messages.style";

import Room from "./_component/Room";

export default function Home() {
  return (
    <StyledMessages>
      <div className="header">
        <h3>Message</h3>
      </div>
      <Room />
    </StyledMessages>
  );
}
