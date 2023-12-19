import "./Reply.scss";
import Title from "./Title";

function Reply() {
  return (
    <section className="reply-block">
      <form className="reply-block__content">
        <Title medium>댓글 1000개</Title>
        <input className="reply-input" type="text" />
      </form>
    </section>
  );
}

export default Reply;
