"use client";

import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { TbHome } from "react-icons/tb";
import { TbMoodSearch } from "react-icons/tb";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

import { StyledNavMenu } from "./NavMenu.style";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};
export default function NavMenu() {
  const segment = useSelectedLayoutSegment(); //compose
  const segments = useSelectedLayoutSegments(); //compose/twwet

  return (
    <StyledNavMenu>
      <li>
        <Link href="/home">
          <div className="navPill">
            <TbHome size={20} />
            <div style={{ fontWeight: `${segment === "home" ? 600 : 400}` }}>
              Home
            </div>
          </div>
        </Link>
      </li>

      <li>
        <Link href="/explore">
          <div className="navPill">
            <TbMoodSearch size={20} />
            <div style={{ fontWeight: `${segment === "explore" ? 600 : 400}` }}>
              Explore
            </div>
          </div>
        </Link>
      </li>

      <li>
        <Link href="/messages">
          <div className="navPill">
            <PiEnvelopeSimpleDuotone size={20} />
            <div
              style={{ fontWeight: `${segment === "messages" ? 600 : 400}` }}
            >
              Messages
            </div>
          </div>
        </Link>
      </li>

      <li>
        <Link href="/search">
          <div className="navPill">
            <CgProfile size={20} />
            <div style={{ fontWeight: `${segment === "search" ? 600 : 400}` }}>
              Search
            </div>
          </div>
        </Link>
      </li>
    </StyledNavMenu>
  );
}
