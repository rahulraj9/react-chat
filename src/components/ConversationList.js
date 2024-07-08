import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ConversationList = ({ onCreateConversation }) => {
  const conversations = useSelector(state => state.conversations.conversations || []);
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
    <div className="conversation-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <button onClick={onCreateConversation}>Create Conversation</button>
      <div className="conversations">
        {filteredConversations.map(conv => (
          <Link to={`/chat/${conv.id}`} key={conv.id}>
            <div className="conversation-item">
              <div className="contact-name">{conv.contactName}</div>
              <div className="last-message">{conv.lastMessage}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
