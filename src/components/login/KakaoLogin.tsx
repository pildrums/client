import { RiCircleFill, RiArrowRightLine } from "react-icons/ri";

// kakao login
function KakaoLogin() {
  const kakaoLogin = () => {
    console.log("Kakao Login Clicked");
  };

  return (
    <button className="Social-button" onClick={kakaoLogin}>
      <span className="Social-button__text">
        <RiCircleFill size={32} color="yellow" />
        카카오로 계속하기
      </span>
      <span className="Social-button__icon">
        <RiArrowRightLine size={32} />
      </span>
    </button>
  );
}

export default KakaoLogin;
