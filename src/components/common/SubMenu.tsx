"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

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
    <SubMenuBlock className={visible ? "scrollUp" : "scrollDown"}>
      <SubMenuItem className={pathname === "/match/month" ? "active" : ""}>
        <Link href="/match/month">월간 승리요정</Link>
      </SubMenuItem>
      <SubMenuItem className={pathname === "/match/today" ? "active" : ""}>
        <Link href="/match/today">오늘의 승부예측</Link>
      </SubMenuItem>
    </SubMenuBlock>
  );
}

const SubMenuBlock = styled.ul`
  position: absolute;
  z-index: 999;
  top: 70px;
  left: 230px;
  display: flex;
  gap: 20px;
  &.scrollDown {
    transition: opacity 0.2s ease-in-out;
    animation: scrollDown 0.2s normal;
    opacity: 0;
    transform: translateY(-70px);
    z-index: 999;
    @keyframes scrollDown {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-20px);
      }
    }
  }
  &.scrollUp {
    transition: opacity 0.2s ease-in-out;
    animation: scrollUp 0.2s normal;
    opacity: 1;
    transform: translateY(0);
    z-index: 999;
    @keyframes scrollUp {
      0% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const SubMenuItem = styled.li`
  width: 120px;
  text-align: center;
  cursor: pointer;
  &.active {
    font-weight: 700;
    border-bottom: 4px solid #000;
    padding-bottom: 6px;
  }
`;

export default SubMenu;
