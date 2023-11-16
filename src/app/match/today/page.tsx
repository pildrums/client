"use client";

import { styled } from "styled-components";

function TodayPage() {
  return (
    <>
      <TodayBlock>오늘의 승부예측</TodayBlock>
    </>
  );
}

const TodayBlock = styled.div`
  height: 200vh;
`;

export default TodayPage;
