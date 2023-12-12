"use client";

import React from "react";
import Link from "next/link";
import { IoLogoSnapchat } from "react-icons/io";
import { CgSearchLoading } from "react-icons/cg";

import { StyledAfterLoginLayout } from "./layout.style";

import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

interface AfterLoginLayoutProps {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: AfterLoginLayoutProps) {
  return (
    <StyledAfterLoginLayout>
      <header className="leftSectionWrapper">
        <section className="leftSectionWrapper">
          <div className="leftSectionFixed">
            {/* logo */}

            <Link className="logo" href="home">
              <div className="logoPill">
                <IoLogoSnapchat size={50} />
              </div>
            </Link>

            {/* Nav Menu */}

            <nav>
              <NavMenu />

              {/* Post */}

              <Link href="/compose/tweet" className="postButton">
                Post
              </Link>

              <div className="logoutButton">
                <LogoutButton
                  onLogout={(e: any) => {
                    console.log(e);
                  }}
                />
              </div>
            </nav>
          </div>
        </section>
      </header>
      <div className="rightSectionWrapper">
        <div className="rightSectionInner">
          <main>{children}</main>
          <section className="rightSection">
            <form action="" className="search">
              <CgSearchLoading size={25} />

              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </StyledAfterLoginLayout>
  );
}
