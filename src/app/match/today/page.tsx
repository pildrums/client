import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 오늘의 승부예측",
};

function TodayPage() {
  return (
    <>
      <DateSection />
      <ScoreList />
    </>
  );
}

export default TodayPage;
