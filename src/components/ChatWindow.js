import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/messagesSlice';

const ChatWindow = ({ conversationId }) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages.messages[conversationId] || []);
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' || file) {
      const message = {
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toISOString(),
        file: file ? URL.createObjectURL(file) : null
      };
      dispatch(addMessage({ conversationId, message }));
      setNewMessage('');
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'me' ? 'mine' : 'sender'}`}>
            {msg.text && <span>{msg.text}</span>}
            {msg.file && <img src={msg.file} alt="Sent media" className="chat-media" />}
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
        <label htmlFor="file-upload">Attach file</label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {file && <div className="file-preview">{file.name}</div>}
    </div>
  );
};

export default ChatWindow;
