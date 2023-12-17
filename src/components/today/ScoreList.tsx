import "./ScoreList.scss";
import ScoreListItem from "./ScoreListItem";

const team = [
  {
    id: 1,
    home: "삼성 라이온즈",
    away: "기아 타이거즈",
  },
  {
    id: 2,
    home: "LG 트윈스",
    away: "두산 베어스",
  },
  {
    id: 3,
    home: "롯데 자이언츠",
    away: "NC 다이노스",
  },
  {
    id: 4,
    home: "SSG 랜더스",
    away: "KT 위즈",
  },
  {
    id: 5,
    home: "한화 이글스",
    away: "키움 히어로즈",
  },
];

function ScoreList() {
  return (
    <section className="score-block">
      <ul className="score-block__content">
        {team.map((item) => (
          <ScoreListItem key={item.id} home={item.home} away={item.away} />
        ))}
      </ul>
    </section>
  );
}

export default ScoreList;
