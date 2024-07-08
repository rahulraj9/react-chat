// src/components/CreateConversationPopup.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConversation } from '../redux/conversationsSlice';
import contacts from '../data/contacts.json';

const CreateConversationPopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const conversations = useSelector(state => state.conversations.conversations);
  const [availableContacts, setAvailableContacts] = useState([]);

  useEffect(() => {
    const usedContacts = conversations.map(conv => conv.id);
    setAvailableContacts(contacts.filter(contact => !usedContacts.includes(contact.id)));
  }, [conversations]);

  const handleStartConversation = (contact) => {
    dispatch(addConversation({id: contact.id, contactName: contact.name, lastMessage: '' }));
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Select a Contact</h2>
        <button onClick={onClose}>Close</button>
        {availableContacts.map(contact => (
          <div key={contact.id} onClick={() => handleStartConversation(contact)} className="contact-item">
            {contact.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateConversationPopup;
