import { Metadata } from "next";
import LoginSection from "@/components/login/LoginSection";

export const metadata: Metadata = {
  title: "플레이닷 | 로그인",
};

function LoginPage() {
  return <LoginSection />;
}

export default LoginPage;
