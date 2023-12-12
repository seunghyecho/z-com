"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { TbHome } from "react-icons/tb";
import { TbMoodSearch } from "react-icons/tb";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

import { StyledNavMenu } from "./NavMenu.style";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const me = {
    id: "shcho",
    nickname: "shcho",
    image: "",
  };
  return (
    <StyledNavMenu>
      <li>
        <Link href="/home">
          <div className="navPill">
            <TbHome size={20} />
            {segment === "home" ? (
              <>
                <div style={{ fontWeight: "bold" }}>Home</div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: "light" }}>Home</div>
              </>
            )}
          </div>
        </Link>
      </li>

      <li>
        <Link href="/explore">
          <div className="navPill">
            <TbMoodSearch size={20} />
            {segment === "explore" ? (
              <>
                <div style={{ fontWeight: "bold" }}>Explore</div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: "light" }}>Explore</div>
              </>
            )}
          </div>
        </Link>
      </li>

      <li>
        <Link href="/messages">
          <div className="navPill">
            <PiEnvelopeSimpleDuotone size={20} />
            {segment === "messages" ? (
              <>
                <div style={{ fontWeight: "bold" }}>Messages</div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: "light" }}>Messages</div>
              </>
            )}
          </div>
        </Link>
      </li>

      <li>
        <Link href="/search">
          <div className="navPill">
            <CgProfile size={20} />

            {segment === "search" ? (
              <>
                <div style={{ fontWeight: "bold" }}>Search</div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: "light" }}>Search</div>
              </>
            )}
          </div>
        </Link>
      </li>
    </StyledNavMenu>
  );
}
