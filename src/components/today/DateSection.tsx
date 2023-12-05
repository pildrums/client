import { Text2, Text3 } from "../common/Text";
import { Title1, Title2, Title3, Title4 } from "../common/Title";
import "./DateSection.scss";

function DateSection() {
  return (
    <section className="date-block">
      <div className="date-block__title">
        <span className="live">LIVE</span>
        <Title2>12월 4일</Title2>
      </div>
      <div className="date-block__text">
        <Text2>투표는 12/4 오후 7시까지 가능합니다.</Text2>
        <Text2>투표를 통해 우리팀을 응원해주세요!</Text2>
      </div>
    </section>
  );
}

export default DateSection;
