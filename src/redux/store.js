import { configureStore } from '@reduxjs/toolkit';
import { authSlice, userSlice } from './slices';
// import  { authSlice } from './slices/auth/auth';
// import { userSlice } from './slices/user/user';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});
