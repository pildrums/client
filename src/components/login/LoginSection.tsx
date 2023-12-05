import "./LoginSection.scss";
import SocialButtons from "./SocialButtons";

function LoginSection() {
  return (
    <div className="login-block">
      <div className="login-content">
        <h1 className="login-title">로그인</h1>
        <p className="login-description">
          지금 바로 가입 후, 좋아하는 구단의 승부를 예측해보세요!
        </p>
        <SocialButtons />
      </div>
      <div className="login-image"></div>
    </div>
  );
}

export default LoginSection;
