import Text from "../common/Text";
import Title from "../common/Title";
import "./DateSection.scss";

const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = `${month}월 ${date}일`;

function DateSection() {
  return (
    <section className="date-block">
      <div className="date-block__title">
        <span className="live">LIVE</span>
        <Title large>{day}</Title>
      </div>
      <div className="date-block__text">
        <Text medium>투표는 {`${day}`} 경기 시작 전까지 가능합니다.</Text>
        <Text medium>투표를 통해 우리팀을 응원해주세요!</Text>
      </div>
    </section>
  );
}

export default DateSection;
