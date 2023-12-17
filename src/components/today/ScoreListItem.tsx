"use client";

import { useCallback, useState } from "react";
import Text from "../common/Text";
import Title from "../common/Title";
import "./ScoreListItem.scss";
import classNames from "classnames";

interface ScoreListItemProps {
  home: string;
  away: string;
}

function ScoreListItem({ home, away }: ScoreListItemProps) {
  // Todo: left, right를 selectTeam으로 리팩토링
  const [selectHome, setSelectHome] = useState(false);
  const [selectAway, setSelectAway] = useState(false);

  const onClickLeft = useCallback(() => {
    setSelectHome(!selectHome);
    setSelectAway(false);
  }, [selectHome]);

  const onClickRight = useCallback(() => {
    setSelectAway(!selectAway);
    setSelectHome(false);
  }, [selectAway]);

  return (
    <li className="score-item-block">
      <div
        className={classNames(
          `score-item-block__left ${selectHome ? "active-left" : ""}`,
        )}
        onClick={onClickLeft}
      >
        <div className="team-img"></div>
        <div className="team-info-left">
          {selectHome ? <Text small>{home}</Text> : <Text large>{home}</Text>}
          {selectHome && <Title medium>50%</Title>}
        </div>
      </div>
      <div
        className={classNames(
          `score-item-block__right ${selectAway ? "active-right" : ""}`,
        )}
        onClick={onClickRight}
      >
        <div className="team-img"></div>
        <div className="team-info-right">
          {selectAway ? <Text small>{away}</Text> : <Text large>{away}</Text>}
          {selectAway && <Title medium>50%</Title>}
        </div>
      </div>
    </li>
  );
}

export default ScoreListItem;
