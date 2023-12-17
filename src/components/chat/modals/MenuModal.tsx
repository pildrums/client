import React from "react";
import "@/components/chat/modals/MenuModal.scss";

function MenuModal() {
  return (
    <div className="menu-container">
      <div className="menu-container__box">
        <div>사진</div>
        <p>미니투표</p>
      </div>
      <div className="menu-container__box">
        <div>사진</div>
        <p>외치기</p>
      </div>
      <div className="menu-container__box">
        <div>사진</div>
        <p>선물하기</p>
      </div>
    </div>
  );
}

export default MenuModal;
