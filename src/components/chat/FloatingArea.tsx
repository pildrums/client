import "@/components/chat/FloatingArea.scss";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";

function FloatingArea() {
  return (
    <div className="floatingarea">
      <ChatInput />
      <MenuModal />
    </div>
  );
}

export default FloatingArea;
