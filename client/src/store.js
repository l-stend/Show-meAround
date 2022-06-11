import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './features/chat/chatSlice';
import toursSlice from './features/tours/toursSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    tours: toursSlice,
    chat: chatSlice,
  },
});
