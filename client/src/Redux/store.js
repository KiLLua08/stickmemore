import { configureStore } from '@reduxjs/toolkit';
import authReducer from './user/userSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
