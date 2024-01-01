import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import { Metadata } from "next";
import "./TodayPage.scss";
import Comment from "@/components/comment/Comment";

export const metadata: Metadata = {
  title: "플레이닷 | 오늘의 승부예측",
};

function TodayPage() {
  return (
    <div className="today-page-block">
      <DateSection />
      <ScoreList />
      <Comment />
    </div>
  );
}

export default TodayPage;
