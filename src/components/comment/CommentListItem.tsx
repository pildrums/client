"use client";

import Text from "../common/Text";
import TeamTag from "../tag/TeamTag";
import { CommentData } from "./Comment";
import "./CommentListItem.scss";
import { FiThumbsUp } from "react-icons/fi";

import { ChangeEvent, useCallback, useState } from "react";
import Reply from "./Reply";

function CommentListItem({ username, team, comment }: CommentData) {
  const [visibleReply, setVisibleReply] = useState(false);
  const [reply, setReply] = useState("");

  const onVisible = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);

  const onChange = useCallback((event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setReply(value);
  }, []);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <div className="profile-image"></div>
          <div className="content">
            <div className="content__profile">
              <Text medium>{username}</Text>
              <TeamTag team={team} />
            </div>
            <Text medium>{comment}</Text>
            <div className="content__reply">
              <span>답글 20</span>
              <span onClick={onVisible}>답글쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <div className="item-block__button__date">
            <span>2023.12.15</span>
            <span>신고</span>
          </div>
          <div className="item-block__button__like">
            <Text>좋아요</Text>
            <span>15</span>
            <div className="like-btn">
              <FiThumbsUp />
            </div>
          </div>
        </div>
      </li>
      {visibleReply && <Reply reply={reply} onChange={onChange} />}
    </>
  );
}

export default CommentListItem;
