"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SubMenu.module.scss";

const cn = classNames.bind(styles);

function SubMenu() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const pathname = usePathname();

  const onScroll = useCallback(() => {
    const move = window.scrollY;
    setVisible(position > move);
    setPosition(move);
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <ul
      className={cn(
        `${styles.submenu_block}`,
        visible ? `${styles.scrollUp}` : `${styles.scrollDown}`,
      )}
    >
      <li
        className={cn(
          `${styles.submenu_item}`,
          pathname === "/match/month" ? `${styles.active}` : "",
        )}
      >
        <Link href="/match/month">월간 승리요정</Link>
      </li>
      <li
        className={cn(
          `${styles.submenu_item}`,
          pathname === "/match/today" ? `${styles.active}` : "",
        )}
      >
        <Link href="/match/today">오늘의 승부예측</Link>
      </li>
    </ul>
  );
}

export default SubMenu;
