import Header from "@/components/common/Header";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/GlobalStyles.scss";

export const metadata: Metadata = {
  title: "플레이닷",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ko">
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
