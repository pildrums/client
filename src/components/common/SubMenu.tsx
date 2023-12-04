"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import "./SubMenu.scss";

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
    <ul className={`submenu-block ${visible ? "scrollUp" : "scrollDown"}`}>
      <li
        className={`submenu-block__item ${
          pathname === "/match/month" ? "active" : ""
        }`}
      >
        <Link href="/match/month">월간 승리요정</Link>
      </li>
      <li
        className={`submenu-block__item ${
          pathname === "/match/today" ? "active" : ""
        }`}
      >
        <Link href="/match/today">오늘의 승부예측</Link>
      </li>
    </ul>
  );
}

export default SubMenu;
