import { Metadata } from "next";
import "./page.scss";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import FloatingArea from "@/components/chat/FloatingArea";

export const metadata: Metadata = {
  title: "플레이닷 | 채팅",
};

function ChatPage() {
  return (
    <div className="chat">
      <FloatingArea />
      <ChatHeader />
      <ChatLog />
    </div>
  );
}

export default ChatPage;
