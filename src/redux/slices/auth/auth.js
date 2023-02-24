import { createSlice } from '@reduxjs/toolkit';
import { removeLocalData } from '../../../utils';

const initialState = {
  userLoginData: {},
  loading: false,
  error: false,
  message: '',
  token: '',
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
      state.token = action.payload;
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
      state.token = action.payload;
    },
    signupRequestFail: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action?.error?.message;
    },
    logOutRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    logOutSuccess: (state) => {
      removeLocalData('token');
      state.token = '';
      state.loading = false;
      state.error = false;
      state.userLoginData = {};
    },
    logOutFail: (state, action) => {
      state.loading = true;
      state.message = action.payload.message;
      state.error = true;
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
  setuserRequest,
  logOutRequest,
  logOutSuccess,
  logOutFail,
  getuserRequest,
  getuserSuccess,
  getuserRequestFail,
} = authSlice.actions;

export default authSlice.reducer;
