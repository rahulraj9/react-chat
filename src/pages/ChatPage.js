import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const { conversationId } = useParams();

  return (
    <div className="chat-page">
      <Sidebar />
      {conversationId ? <ChatWindow conversationId={conversationId} /> : <div className="empty-chat">Select a conversation</div>}
    </div>
  );
};

export default ChatPage;
