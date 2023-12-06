"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import "./Header.scss";

function Header() {
  const pathname = usePathname();
  if (pathname === "/login" || "/signup") return;
  return (
    <>
      <header className="header-block">
        <div className="header-block__content">
          <h1>
            <Link className="logo" href="/match/today">
              승리요정
            </Link>
          </h1>
          <nav className="header-block__navigation">
            <div>
              <Link
                href="/match/today"
                // todo: classname 변수로 따로 지정
                className={`${
                  pathname === "/match/today" ? "active-page" : ""
                } ${pathname === "/match/month" ? "active-page" : ""} ${
                  pathname === "/match/previous" ? "active-page" : ""
                }`}
              >
                승부예측
                <div
                  className={`${
                    pathname === "/match/today" ? "underbar" : ""
                  } ${pathname === "/match/month" ? "underbar" : ""} ${
                    pathname === "/match/previous" ? "underbar" : ""
                  }`}
                />
              </Link>
              <Link
                className={`${pathname === "/community" ? "active-page" : ""}`}
                href="/community"
              >
                커뮤니티
                <div
                  className={`${pathname === "/community" ? "underbar" : ""}`}
                ></div>
              </Link>
            </div>
          </nav>
          <Link className="login" href="/login">
            로그인
          </Link>
        </div>
        {pathname === "/community" || <SubMenu />}
      </header>
      <div className="space" />
    </>
  );
}

export default Header;
