import Link from "next/link";
import { ReactNode } from "react";

type SocialButtonProps = {
  title: string;
  link: string;
  icon: ReactNode;
};

function SocialButton({ title, link, icon }: SocialButtonProps) {
  return (
    <Link href={link} className="Social-link">
      <button className="Social-button">
        {icon}
        {title}
      </button>
    </Link>
  );
}

export default SocialButton;
