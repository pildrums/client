"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import "./Header.scss";
import usePath from "@/lib/hooks/usePath";

function Header() {
  const pathname = usePathname();

  const {
    ACTIVE_MATCH_CLASSNAME,
    ACTIVE_COMMUNITY_CLASSNAME,
    UNDERBAR_COMMUNITY_CLASSNAME,
    UNDERBAR_MATCH_CLASSNAME,
    PATH,
  } = usePath();

  if (pathname === "/login") return;

  return (
    <>
      <header className="header-block">
        <div className="header-block__content">
          <h1>
            <Link href={PATH.today} className="logo">
              승리요정
            </Link>
          </h1>
          <nav className="header-block__navigation">
            <div>
              <Link href={PATH.today} className={ACTIVE_MATCH_CLASSNAME}>
                승부예측
                <div className={UNDERBAR_MATCH_CLASSNAME} />
              </Link>
              <Link
                href={PATH.community}
                className={ACTIVE_COMMUNITY_CLASSNAME}
              >
                커뮤니티
                <div className={UNDERBAR_COMMUNITY_CLASSNAME}></div>
              </Link>
            </div>
          </nav>
          <Link href={PATH.login} className="login">
            로그인
          </Link>
        </div>
        {pathname === "/community" || pathname === "/match/chat" || <SubMenu />}
      </header>
      <div className="space" />
    </>
  );
}

export default Header;
