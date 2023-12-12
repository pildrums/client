import { ReactNode } from "react";
import "./Title.scss";
import classNames from "classnames";

interface TitleProps {
  children: ReactNode;
  largest?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
}

/**
 * 커스텀 타이틀 컴포넌트
 * @param large 18px / 500(medium)
 * @param medium 16px / 500(medium)
 * @param small 14px / 500(medium)
 * @param caption 12px / 400(normal)
 */
function Title({ children, largest, large, medium, small }: TitleProps) {
  return (
    <h2
      className={classNames(
        `${largest && "title-1"}`,
        `${large && "title-2"}`,
        `${medium && "title-3"}`,
        `${small && "title-4"}`,
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
