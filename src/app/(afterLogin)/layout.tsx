"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";

import { StyledAfterLoginLayout } from "./layout.style";
interface AfterLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function AfterLoginLayout({
  children,
  modal,
}: AfterLoginLayoutProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <StyledAfterLoginLayout className="container">
      <header className="leftSectionWrapper">
        <section className="leftSection">
          <div className="leftSectionWrapper">
            <div className="leftSectionFixed">
              {/* logo */}

              <Link className="logo" href="home">
                <div className="logoPill"></div>
              </Link>

              {/* Nav Menu */}

              <nav>
                <NavMenu />

                {/* Post */}

                <Link href="/compose/tweet" className="postButton">
                  Post
                </Link>

                <div className="logoutButton">
                  <LogoutButton />
                </div>
              </nav>
            </div>
          </div>
        </section>
      </header>
      <div className="rightSectionWrapper">
        <div className="rightSectionInner">
          <main>{children}</main>
          <section className="rightSection">
            <RightSearchZone />

            <TrendSection />

            <div className="followRecommend">
              <h3>Follow Recommend</h3>
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </StyledAfterLoginLayout>
  );
}
