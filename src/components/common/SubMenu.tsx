import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

function SubMenu() {
  const pathname = usePathname();
  return (
    <SubMenuBlock>
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
  top: 70px;
  left: 230px;
  display: flex;
  gap: 20px;
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
