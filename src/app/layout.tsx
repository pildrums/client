import Header from "@/components/common/Header";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/GlobalStyles.scss";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "승리요정",
  description: "승리요정",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ko">
        <body>
          <Header />
          <div className={styles.layout}>{children}</div>
        </body>
      </html>
    </>
  );
}
