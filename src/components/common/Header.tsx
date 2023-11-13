"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";
import SubMenu from "./SubMenu";

function Header() {
  const pathname = usePathname();
  return (
    <>
      <HeaderBlock>
        <HeaderContent>
          <h1>
            <Logo href="/">승리요정</Logo>
          </h1>
          <Navigation>
            <ul>
              <li
                className={
                  pathname === "/match/today" || "/match/monthly"
                    ? "active"
                    : ""
                }
              >
                <Link href="/match/today">승부예측</Link>
              </li>
              <li className={pathname === "/community" ? "active" : ""}>
                <Link href="/community">커뮤니티</Link>
              </li>
            </ul>
          </Navigation>
          <Login href="/login">로그인</Login>
        </HeaderContent>
        {pathname === "/community" ? null : <SubMenu pathname={pathname} />}
      </HeaderBlock>
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
    li {
      &.active {
        font-weight: 700;
      }
    }
  }
`;

const Login = styled(Link)`
  background: #999;
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background: #444;
  }
`;

const Space = styled.div`
  margin-bottom: 100px;
`;

export default Header;
