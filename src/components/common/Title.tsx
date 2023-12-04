import { ReactNode } from "react";
import "./Title.scss";

interface TitleProps {
  children: ReactNode;
}

/**
 * @description 48px / bold(700)
 * @param children
 * @returns Title1 컴포넌트
 */
function Title1({ children }: TitleProps) {
  return <h1 className="title_1">{children}</h1>;
}

/**
 * @description 36px / semi-bold(600)
 * @param children
 * @returns Title2 컴포넌트
 */
function Title2({ children }: TitleProps) {
  return <h2 className="title_2">{children}</h2>;
}

/**
 * @description 24px / semi-bold(600)
 * @param children
 * @returns Title3 컴포넌트
 */
function Title3({ children }: TitleProps) {
  return <h3 className="title_3">{children}</h3>;
}

/**
 * @description 22px / medium(500)
 * @param children
 * @returns Title4 컴포넌트
 */
function Title4({ children }: TitleProps) {
  return <h4 className="title_4">{children}</h4>;
}

export { Title1, Title2, Title3, Title4 };
