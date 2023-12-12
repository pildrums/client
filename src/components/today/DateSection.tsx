import Text from "../common/Text";
import Title from "../common/Title";
import "./DateSection.scss";

function DateSection() {
  return (
    <section className="date-block">
      <div className="date-block__title">
        <span className="live">LIVE</span>
        <Title large>12월 4일</Title>
      </div>
      <div className="date-block__text">
        <Text medium>투표는 12/4 오후 7시까지 가능합니다.</Text>
        <Text medium>투표를 통해 우리팀을 응원해주세요!</Text>
      </div>
    </section>
  );
}

export default DateSection;
