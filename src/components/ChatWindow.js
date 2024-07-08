import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/messagesSlice';

const ChatWindow = ({ conversationId }) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages.messages[conversationId] || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      dispatch(addMessage({ conversationId, message: { text: newMessage, sender: 'me', timestamp: new Date().toISOString() } }));
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <span>{msg.sender}: </span>{msg.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
