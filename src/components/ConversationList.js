import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { truncateMessage } from '../utils/truncate';

const ConversationList = ({ onCreateConversation }) => {
  const conversations = useSelector(state => state.conversations.conversations || []);
  const messages = useSelector(state => state.messages.messages || {});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConversations, setFilteredConversations] = useState(conversations);

  useEffect(() => {
    setFilteredConversations(
      conversations.filter(conv =>
        conv.contactName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, conversations]);

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <button onClick={onCreateConversation}>Create Conversation</button>
      <div className="conversation-list">
        {filteredConversations.map(conv => {
          const lastMessage = messages[conv.id]?.slice(-1)[0]?.text || "No messages yet";
          const truncatedLastMessage = truncateMessage(lastMessage, 5); // Adjust word limit as needed
          return (
            <Link to={`/chat/${conv.id}`} key={conv.id}>
              <div className="conversation-item">
                <div className="contact-name">{conv.contactName}</div>
                <div className="last-message">{truncatedLastMessage}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationList;
