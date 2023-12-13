import "./ChatInput.scss";

function ChatInput() {
  return (
    <div className="input-container">
      <div className="input-container__button">...</div>
      <input
        className="input-container__input"
        type="text"
        placeholder="대화를 입력해 주세요."
      />
      <div className="input-container__button">보내기</div>
    </div>
  );
}

export default ChatInput;
