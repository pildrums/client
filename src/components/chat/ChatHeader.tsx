import "@/components/chat/ChatHeader.scss";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header__button">*</div>
      <div className="chat-header__score">3</div>
      <div className="chat-header__info">
        <div className="date">23.11.23</div>
        <div className="teams">
          <div className="teams__name">기아</div>
          <div className="teams__vs">VS</div>
          <div className="teams__name">키움</div>
        </div>
      </div>
      <div className="chat-header__score">5</div>
      <div className="chat-header__button">*</div>
    </div>
  );
}

export default ChatHeader;
