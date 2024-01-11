import { RiCircleFill, RiArrowRightLine } from "react-icons/ri";

function GoogleLogin() {
  const googleLogin = () => {
    console.log("Google Login Clicked");
  };
  return (
    <button className="Social-button" onClick={googleLogin}>
      <span className="Social-button__text">
        <RiCircleFill size={32} color="gray" />
        구글로 계속하기
      </span>
      <span className="Social-button__icon">
        <RiArrowRightLine size={32} />
      </span>
    </button>
  );
}

export default GoogleLogin;
