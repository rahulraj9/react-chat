import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/chat/:conversationId" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
