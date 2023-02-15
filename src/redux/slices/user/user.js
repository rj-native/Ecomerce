import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state) => {
      state.loading = false;
    },
    changePasswordFail: (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFail,
} = userSlice.actions;

export default userSlice.reducer;
