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
import FollowRecommentSection from "./_component/FollowRecommendSection";

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
    <div className="afterLoginLayout container">
      {/* 로그아웃 버튼 포함 시키도록 RQProvider 감쌈 */}
      <RQProvider>
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

                    <LogoutButton me={session} />
                  </nav>
                )}
              </div>
            </div>
          </section>
        </header>

        <div className="rightSectionWrapper">
          <div className="rightSectionInner">
            {children}
            <section className="rightSection">
              <RightSearchZone />
              <TrendSection />
              <FollowRecommentSection />
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
}
