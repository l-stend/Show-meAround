import { configureStore } from '@reduxjs/toolkit';
import toursSlice from './features/tours/toursSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    tours: toursSlice,
  },
});
