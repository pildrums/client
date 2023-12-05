import { Metadata } from "next";
import Title from "./_components/Title";
import Container from "./_components/Container";
import SocialButtons from "./_components/SocialButtons";

export const metadata: Metadata = {
  title: "플레이닷 - 로그인",
};

function LoginPage() {
  return (
    <Container>
      <Title title="Login" />
      <p>지금 바로 가입 후, 좋아하는 구단의 승부를 예측해보세요!</p>

      <SocialButtons />
    </Container>
  );
}

export default LoginPage;
