"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, styled } from "styled-components";
import SubMenu from "./SubMenu";

function Header() {
  const pathname = usePathname();
  return (
    <>
      <HeaderBlock>
        <HeaderContent>
          <h1>
            <Logo href="/match/today">승리요정</Logo>
          </h1>
          <Navigation>
            <ul>
              <NavItem
                href="/match/today"
                $today={pathname === "/match/today"}
                $month={pathname === "/match/month"}
              >
                승부예측
              </NavItem>
              <NavItem href="/community" $community={pathname === "/community"}>
                커뮤니티
              </NavItem>
            </ul>
          </Navigation>
          <Login href="/login">로그인</Login>
        </HeaderContent>
      </HeaderBlock>
      {pathname === "/community" || <SubMenu />}
      <Space />
    </>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  height: 50px;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderContent = styled.div`
  width: 1280px;
  height: inherit;
  background: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  background: #999;
  padding: 8px 16px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    gap: 80px;
  }
`;

const NavItem = styled(Link)<{
  $today?: boolean;
  $month?: boolean;
  $community?: boolean;
}>`
  ${(props) =>
    props.$today &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.$month &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.$community &&
    css`
      font-weight: 700;
    `}
`;

const Login = styled(Link)`
  background: #999;
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out;
`;

const Space = styled.div`
  margin-bottom: 100px;
`;

export default Header;
