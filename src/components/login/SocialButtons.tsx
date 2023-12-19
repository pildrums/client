"use client";

import GoogleLogin from "./GoogleLogin";
import KakaoLogin from "./KakaoLogin";
import NaverLogin from "./NaverLogin";
import "./SocialButtons.scss";

function SocialButtons() {
  return (
    <div className="Social-Buttons">
      <KakaoLogin />
      <GoogleLogin />
      <NaverLogin />
    </div>
  );
}

export default SocialButtons;
