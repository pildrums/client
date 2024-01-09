import "@/components/chat/modals/VoteModal.scss";

function VoteModal() {
  return (
    <div className="vote-container">
      <div className="vote-container__time">🔔 20:12 종료</div>
      <div className="vote-container__disc">
        <div className="vote-container__disc__sub">[djkdfjk]님의 미니투표</div>
        <div className="vote-container__disc__title">안타 가능?</div>
      </div>
      <div className="vote-container__vote">
        <div className="vote-container__vote__button">O</div>
        <div className="vote-container__vote__button">X</div>
      </div>
    </div>
  );
}

export default VoteModal;
