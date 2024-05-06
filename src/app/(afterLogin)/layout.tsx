import React from "react";
import Link from "next/link";
import { MdOutlinePostAdd } from "react-icons/md";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import { auth } from "@/auth"; // server component 에서
import RQProvider from "./_component/RQProvider";
import FollowRecommendSection from "./_component/FollowRecommendSection";
import LeftSectionFixed from "./home/_component/LeftSectionFixed";
import RightSection from "./home/_component/RightSection";

interface AfterLoginLayoutProps {
 children: React.ReactNode;
 modal: React.ReactNode;
}

export default async function AfterLoginLayout({
 children,
 modal,
}: AfterLoginLayoutProps) {
 const session = await auth(); //authjs.session-token
 return (
  <>
   <div id="afterLoginLayout" className="container">
    {/* 로그아웃 버튼 포함 시키도록 RQProvider 감쌈 */}
    <RQProvider>
     <header className="leftSectionWrapper">
      <section className="leftSection">
       <LeftSectionFixed session={session} />
      </section>
     </header>

     <div className="rightSectionWrapper">
      <div className="rightSectionInner">
       {children}
       <RightSection />
      </div>
     </div>
     {modal}
    </RQProvider>
   </div>
  </>
 );
}
