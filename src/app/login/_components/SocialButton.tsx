import Link from "next/link";
import { ReactNode } from "react";

type SocialButtonProps = {
  title: string;
  link: string;
  icon: ReactNode;
};

function SocialButton({ title, link, icon }: SocialButtonProps) {
  return (
    <Link href={link}>
      <button className="SocialButton">
        {icon}
        {title}
      </button>
    </Link>
  );
}

export default SocialButton;
