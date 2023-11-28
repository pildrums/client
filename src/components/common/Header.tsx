"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header_block}>
        <div className={styles.content}>
          <h1>
            <Link className={styles.logo} href="/match/today">
              승리요정
            </Link>
          </h1>
          <nav className={styles.navigation}>
            <div>
              <Link
                href="/match/today"
                className={cn(
                  `${pathname === "/match/today" ? styles.active_page : ""}`,
                  `${pathname === "/match/month" ? styles.active_page : ""}`,
                )}
              >
                승부예측
              </Link>
              <Link
                className={cn(
                  `${pathname === "/community" ? styles.active_page : ""}`,
                )}
                href="/community"
              >
                커뮤니티
              </Link>
            </div>
          </nav>
          <Link className={styles.login} href="/login">
            로그인
          </Link>
        </div>
        {pathname === "/community" || <SubMenu />}
      </header>
      <div className={styles.space} />
    </>
  );
}

export default Header;
