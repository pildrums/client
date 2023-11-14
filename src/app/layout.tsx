"use client";

import Header from "@/components/common/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <html lang="ko">
        <body>
          <StyledComponentsRegistry>
            <LayoutBlock>
              <LayoutContent>
                {pathname === "/login" ? null : <Header />}
                {children}
              </LayoutContent>
            </LayoutBlock>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
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
