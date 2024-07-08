import React, { useState } from 'react';
import CreateConversationPopup from './CreateConversationPopup';
import ConversationList from './ConversationList';

const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateConversation = () => {
    setShowPopup(true);
  };

  return (
    <div className="sidebar">
      <ConversationList onCreateConversation={handleCreateConversation} />
      {showPopup && <CreateConversationPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Sidebar;
