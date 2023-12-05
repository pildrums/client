import DateSection from "@/components/today/DateSection";
import ScoreBoard from "@/components/today/ScoreBoard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 오늘의 승부예측",
};

function TodayPage() {
  return (
    <>
      <DateSection />
      <ScoreBoard />
    </>
  );
}

export default TodayPage;
