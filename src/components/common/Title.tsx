import { ReactNode } from "react";
import "./Title.scss";
import classNames from "classnames";

interface TitleProps {
  children: ReactNode;
  largest?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  className?: string;
}

/**
 * 커스텀 타이틀 컴포넌트
 * @param largest 48px / 700(bold)
 * @param large 36px / 600(semi bold)
 * @param medium 24px / 600(semi bold)
 * @param small 22px / 500(medium)
 */
function Title({
  children,
  largest,
  large,
  medium,
  small,
  className,
}: TitleProps) {
  return (
    <h2
      className={classNames(
        `${largest ? "title-1" : ""}`,
        `${large ? "title-2" : ""}`,
        `${medium ? "title-3" : ""}`,
        `${small ? "title-4" : ""}`,
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
