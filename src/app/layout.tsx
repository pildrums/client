"use client";

import Header from "@/components/common/Header";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { styled } from "styled-components";

function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {pathname === "/login" ? null : <Header />}
          <LayoutBlock>
            <LayoutContent>{children}</LayoutContent>
          </LayoutBlock>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const LayoutBlock = styled.div`
  display: flex;
  padding: 0 20px;
`;

const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RootLayout;
