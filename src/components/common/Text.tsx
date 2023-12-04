import "./Text.scss";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

/**
 * @description 18px / medium(500)
 * @param children
 * @returns Text1 컴포넌트
 */
function Text1({ children }: TextProps) {
  return <span className="text_1">{children}</span>;
}

/**
 * @description 16px / medium(500)
 * @param children
 * @returns Text2 컴포넌트
 */
function Text2({ children }: TextProps) {
  return <span className="text_2">{children}</span>;
}

/**
 * @description 14px / medium(500)
 * @param children
 * @returns Text3 컴포넌트
 */
function Text3({ children }: TextProps) {
  return <span className="text_3">{children}</span>;
}

/**
 * @description 12px / normal(400)
 * @param children
 * @returns Caption 컴포넌트
 */
function Caption({ children }: TextProps) {
  return <span className="caption_text">{children}</span>;
}

export { Text1, Text2, Text3, Caption };
