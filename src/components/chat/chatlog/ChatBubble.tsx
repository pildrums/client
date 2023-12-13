import "./ChatBubble.scss";

function ChatBubble() {
  return (
    <div className="bubble-container">
      <div className="bubble-container__img"></div>
      <div className="bubble-container__name">닉네임</div>
      <div className="bubble-container__text">야구시작합니다야구끝났습니다</div>
    </div>
  );
}

export default ChatBubble;
