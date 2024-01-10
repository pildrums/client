import Title from "../common/Title";

import "./LoginSection.scss";
import Image from "next/image";

function LoginSection() {
  return (
    <div className="login-block">
      <div className="login-content">
        <Title largest>플레이닷 ID 생성</Title>
        <div className="login-content__text">
          <Title small>간편로그인을 사용하여 아이디,비밀번호 입력 없이</Title>
          <Title small>쉽게 플레이닷 서비스를 이용할 수 있어!</Title>
        </div>
      </div>
      <div className="login-buttons">
        <div className="login-buttons__button">네이버 로그인</div>
        <div className="login-buttons__button">카카오 로그인</div>
        <div className="login-buttons__button">구글 로그인</div>
      </div>
    </div>
  );
}

export default LoginSection;
