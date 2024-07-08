import { configureStore } from '@reduxjs/toolkit';
import conversationsReducer from './conversationsSlice';
import messagesReducer from './messagesSlice';
import mockData from '../data/chatData.json';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.error("Error loading state from localStorage:", e);
  }
  return {
    conversations: { conversations: mockData.conversations },
    messages: { messages: mockData.messages }
  }; // Fallback to mock data if no state is found
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage:", e);
  }
};

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    messages: messagesReducer
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
