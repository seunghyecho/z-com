"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import { MdOutlinePostAdd } from "react-icons/md";

import { StyledAfterLoginLayout } from "./layout.style";
// import { auth } from "@/auth"; // server component 에서
import { useSession } from "next-auth/react"; // client component 에서
import RQProvider from "./_component/RQProvider";
interface AfterLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function AfterLoginLayout({
  children,
  modal,
}: AfterLoginLayoutProps) {
  const segment = useSelectedLayoutSegment();
  // const session = await auth();
  const { data: session } = useSession();

  return (
    <StyledAfterLoginLayout className="container">
      <header className="leftSectionWrapper">
        <section className="leftSection">
          <div className="leftSectionWrapper">
            <div className="leftSectionFixed">
              {/* logo */}

              <Link className="logo" href={session?.user ? "/home" : "/"}>
                <div className="logoPill"></div>
              </Link>

              {/* Nav Menu */}

              {session?.user && (
                <nav>
                  <NavMenu />

                  <div className="postButton">
                    <Link href="/compose/tweet">
                      <MdOutlinePostAdd size={20} />
                      <span>Post</span>
                    </Link>
                  </div>

                  <LogoutButton />
                </nav>
              )}
            </div>
          </div>
        </section>
      </header>

      <RQProvider>
        <div className="rightSectionWrapper">
          <div className="rightSectionInner">
            {children}
            <section className="rightSection">
              <RightSearchZone />
              <TrendSection />
              <FollowRecommend />
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </StyledAfterLoginLayout>
  );
}
