import { ReplyData } from "./Reply";
import "./ReplyList.scss";
import ReplyListItem from "./ReplyListItem";

interface ReplyListProps {
  reply: ReplyData[];
}

function ReplyList({ reply }: ReplyListProps) {
  return (
    <ul className="reply-list-block">
      {reply.map((item) => (
        <ReplyListItem
          key={item.id}
          username={item.username}
          team={item.team}
          comment={item.comment}
        />
      ))}
    </ul>
  );
}

export default ReplyList;
