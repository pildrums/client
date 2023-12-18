import { ReactNode } from "react";
import "./Text.scss";
import classNames from "classnames";

interface TextProps {
  children: ReactNode;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  caption?: boolean;
}

/**
 * 커스텀 텍스트 컴포넌트
 * @param large 18px / 500(medium)
 * @param medium 16px / 500(medium)
 * @param small 14px / 500(medium)
 * @param caption 12px / 400(normal)
 */
function Text({ children, large, medium, small, caption }: TextProps) {
  return (
    <span
      className={classNames(
        `${large ? "text-1" : ""}`,
        `${medium ? "text-2" : ""}`,
        `${small ? "text-3" : ""}`,
        `${caption ? "caption-text" : ""}`,
      )}
    >
      {children}
    </span>
  );
}

export default Text;
