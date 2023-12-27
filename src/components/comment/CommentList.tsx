import { CommentData } from "./Comment";
import "./CommentList.scss";
import ReplyListItem from "./CommentListItem";

interface CommentListProps {
  comment: CommentData[];
}

function ReplyList({ comment }: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {comment.map((item) => (
        <>
          <ReplyListItem
            key={item.id}
            username={item.username}
            team={item.team}
            comment={item.comment}
          />
        </>
      ))}
    </ul>
  );
}

export default ReplyList;
