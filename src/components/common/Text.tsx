import "./Text.scss";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

function Text1({ children }: TextProps) {
  return <span className="text_1">{children}</span>;
}

function Text2({ children }: TextProps) {
  return <span className="text_2">{children}</span>;
}

function Text3({ children }: TextProps) {
  return <span className="text_3">{children}</span>;
}

function Caption({ children }: TextProps) {
  return <span className="caption_text">{children}</span>;
}

export { Text1, Text2, Text3, Caption };
