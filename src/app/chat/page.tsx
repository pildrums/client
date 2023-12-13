import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import "./page.scss";
import { Metadata } from "next";
import ChatLog from "@/components/chat/chatlog/ChatLog";

export const metadata: Metadata = {
  title: "플레이닷 | 채팅",
};

function ChatPage() {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatLog />
      <ChatInput />
    </div>
  );
}

export default ChatPage;
