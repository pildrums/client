import Text from "../common/Text";
import { ReplyData } from "./Reply";
import "./ReplyListItem.scss";
import TeamTag from "./TeamTag";

function ReplyListItem({ username, team, comment }: ReplyData) {
  return (
    <li className="item-block">
      <div className="item-block__comment">
        <div className="profile-image"></div>
        <div className="content">
          <Text small>{username}</Text>
          <div className="content__reply">
            <TeamTag team={team} />
            <Text medium>{comment}</Text>
          </div>
        </div>
      </div>
      <div className="item-block__button">
        <button>좋아요</button>
        <Text small>36</Text>
        <button>신고</button>
      </div>
    </li>
  );
}

export default ReplyListItem;
