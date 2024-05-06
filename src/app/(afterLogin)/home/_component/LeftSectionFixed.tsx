"use client";

import Link from "next/link";
import { MdOutlinePostAdd } from "react-icons/md";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import { StyledLeftSectionFixed } from "./LeftSectionFixed.stye";

interface LeftSectionFixedProps {
 session: any;
}
export default function LeftSectionFixed({ session }: LeftSectionFixedProps) {
 return (
  <StyledLeftSectionFixed>
   <div className="container">
    <Link className="logo" href={session?.user ? "/home" : "/"}>
     <div className="logoPill"></div>
    </Link>

    {session?.user && (
     <nav>
      <NavMenu />
      <div className="postButton">
       <Link href="/compose/tweet">
        <MdOutlinePostAdd size={20} />
        <span>글쓰기</span>
       </Link>
      </div>

      <LogoutButton me={session} />
     </nav>
    )}
   </div>
  </StyledLeftSectionFixed>
 );
}
