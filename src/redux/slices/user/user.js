import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  message: '',
  profileImage: {},
  upDated: {},
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
    changeProfileRequest: (state) => {
      state.loading = true;
    },
    changeProfileSuccess: (state, action) => {
      state.upDated = action.payload;
      state.profileImage = action.payload;
      state.loading = false;
    },
    changeProfileFail: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFail,
  changeProfileRequest,
  changeProfileSuccess,
  changeProfileFail,
} = userSlice.actions;

export default userSlice.reducer;
