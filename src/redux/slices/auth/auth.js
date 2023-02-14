import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLoginData: {},
  loading: false,
  error: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.userLoginData = action.payload;
      state.loading = false;
    },
    loginRequestFail: (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload.message;
      state.userLoginData = {};
    },
    signupRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    signupRequestSuccess: (state, action) => {
      state.loading = false;
      state.userLoginData = action?.payload;
    },
    signupRequestFail: ({ state }, action) => {
      state.loading = false;
      state.error = true;
      state.message = action?.error?.message;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginRequestFail,
  signupRequest,
  signupRequestSuccess,
  signupRequestFail,
} = authSlice.actions;

export default authSlice.reducer;
