import GuestButton from "./GuestButton";
import "./LoginSection.scss";
import PageNumbers from "./PageNumbers";
import SocialButtons from "./SocialButtons";

function LoginSection() {
  return (
    <div className="login-block">
      <div className="login-content">
        <PageNumbers />
        <h1 className="login-title">로그인</h1>
        <p className="login-description">
          지금 바로 가입 후, 좋아하는 구단의 승부를 예측해보세요!
        </p>
        <div className="login-buttons">
          <GuestButton />
          <SocialButtons />
        </div>
      </div>
      <div className="login-image" />
    </div>
  );
}

export default LoginSection;
