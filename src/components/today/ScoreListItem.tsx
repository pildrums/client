import Text from "../common/Text";
import Title from "../common/Title";
import "./ScoreListItem.scss";

function ScoreListItem() {
  return (
    <li className="score-item-block">
      <div className="score-item-block__left">
        <div className="team-img"></div>
        <div className="team-info-left">
          <Text small>기아타이거즈</Text>
          <Title medium>50%</Title>
        </div>
      </div>
      <div className="score-item-block__right winner">
        <div className="team-img"></div>
        <div className="team-info-right">
          <Text small>두산베어스</Text>
          <Title medium>80%</Title>
        </div>
      </div>
    </li>
  );
}

export default ScoreListItem;
