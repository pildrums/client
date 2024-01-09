import { ButtonHTMLAttributes } from "react";

// TODO: 버튼 템플릿이 나오는대로 props 추가
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function Button({ ...rest }: ButtonProps) {
  return <button {...rest} />;
}

export default Button;
