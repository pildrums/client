import "./Text.scss";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  text1?: string;
  text2?: string;
  text3?: string;
  captionText?: string;
}

function Text({ children, text1, text2, text3, captionText }: TextProps) {
  return (
    <span className={text1 || text2 || text3 || captionText}>{children}</span>
  );
}

export default Text;
