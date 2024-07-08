import { createSlice } from '@reduxjs/toolkit';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    conversations: []
  },
  reducers: {
    addConversation: (state, action) => {
      state.conversations.push(action.payload);
    }
  }
});

export const { addConversation } = conversationsSlice.actions;
export default conversationsSlice.reducer;
