import "./ScoreList.scss";
import ScoreListItem from "./ScoreListItem";

function ScoreList() {
  return (
    <section className="score-block">
      <ul className="score-block__content">
        <ScoreListItem />
        <ScoreListItem />
        <ScoreListItem />
      </ul>
    </section>
  );
}

export default ScoreList;
