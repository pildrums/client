import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // 추후 추가 사항 (클래스 이름)
}

function Input({ ...props }: InputProps) {
  return <input {...props} />;
}

export default Input;
