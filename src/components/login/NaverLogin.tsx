import { RiArrowRightLine, RiCircleFill } from "react-icons/ri";

function NaverLogin() {
  const naverLogin = () => {
    console.log("Naver Login Clicked");
  };

  return (
    <button className="Social-button" onClick={naverLogin}>
      <span className="Social-button__text">
        <RiCircleFill size={32} color="green" />
        네이버로 계속하기
      </span>
      <span className="Social-button__icon">
        <RiArrowRightLine size={32}/>
      </span>
    </button>
  );
}

export default NaverLogin;
