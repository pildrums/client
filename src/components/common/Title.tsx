import { ReactNode } from "react";
import "./Title.scss";

interface TitleProps {
  children: ReactNode;
}

function Title1({ children }: TitleProps) {
  return <h1 className="title_1">{children}</h1>;
}

function Title2({ children }: TitleProps) {
  return <h2 className="title_2">{children}</h2>;
}

function Title3({ children }: TitleProps) {
  return <h3 className="title_3">{children}</h3>;
}

function Title4({ children }: TitleProps) {
  return <h4 className="title_4">{children}</h4>;
}

export { Title1, Title2, Title3, Title4 };
