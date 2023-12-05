import "./SocialButtons.scss";
import SocialButton from "./SocialButton";

const links = [
  {
    title: "카카오로 계속하기",
    link: "/",
    icon: "",
  },
  {
    title: "구글로 계속하기",
    link: "/",
    icon: "",
  },
  {
    title: "네이버로 계속하기",
    link: "/",
    icon: "",
  },
];

function SocialButtons() {
  return (
    <div className="SocialButtons">
      {links.map(({ title, link, icon }) => {
        return (
          <SocialButton key={title} title={title} link={link} icon={icon} />
        );
      })}
    </div>
  );
}

export default SocialButtons;
