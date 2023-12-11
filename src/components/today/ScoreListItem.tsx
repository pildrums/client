import Text from "../common/Text";
import { Title3 } from "../common/Title";
import "./ScoreListItem.scss";

function ScoreListItem() {
  return (
    <li className="score-item-block">
      <div className="score-item-block__left">
        <div className="team-img"></div>
        <div className="team-info-left">
          <Text text3="text-3">기아타이거즈</Text>
          <Title3>50%</Title3>
        </div>
      </div>
      <div className="score-item-block__right winner">
        <div className="team-img"></div>
        <div className="team-info-right">
          <Text text3="text-3">두산베어스</Text>
          <Title3>80%</Title3>
        </div>
      </div>
    </li>
  );
}

export default ScoreListItem;
