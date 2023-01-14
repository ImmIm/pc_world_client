import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from '../preloadedState';
import utils from '../utils/utils';

export const authSlice = createSlice({
  name: 'auth',
  initialState: preloadedState.auth,
  reducers: {
    login(state) {
      state.isLogined = true;
      return state;
    },
    signUp() {},
    logout(state) {
      state.isLogined = false;
      state.currentUser = null;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      utils.authUtils.loginUserAutomatic.pending,
      (state, action) => {
        state.status = 'pending';
      }
    );
    builder.addCase(
      utils.authUtils.loginUserAutomatic.fulfilled,
      (state, action) => {
        state.status = 'fulfilled';
        if (action.payload === null) {
          state.isLogined = false;
        } else if (action.payload.status === 'fail') {
          state.isLogined = false;
        } else {
          state.currentUser = action.payload.user;
          state.userPicture = action.payload.image;
          state.error = '';
          state.isLogined = true;
        }
        return state;
      }
    );
    builder.addCase(
      utils.authUtils.loginUserAutomatic.rejected,
      (state, action) => {
        state.status = 'rejected';
        state.error = 'Something went wrong!';
        state.currentUser = null;
        state.isLogined = false;
      }
    );

    builder.addCase(utils.authUtils.loginUser.pending, (state, action) => {});
    builder.addCase(utils.authUtils.loginUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      if (action.payload === null) {
        state.error = 'Something went wrong!';
        state.isLogined = false;
      } else if (action.payload.status === 'fail') {
        state.error = action.payload.message;
        state.isLogined = false;
      } else {
        state.currentUser = action.payload.user;
        state.userPicture = action.payload.image;
        state.error = '';
        state.isLogined = true;
      }
      return state;
    });
    builder.addCase(utils.authUtils.loginUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!';
      state.currentUser = null;
      state.isLogined = false;
    });

    builder.addCase(utils.authUtils.SignUpUser.pending, (state, action) => {});
    builder.addCase(utils.authUtils.SignUpUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      if (action.payload === null) {
        state.error = 'Something went wrong!';
        state.isLogined = false;
      } else if (action.payload.status === 'fail') {
        state.error = action.payload.message;
        state.isLogined = false;
      } else {
        state.currentUser = action.payload.user;
        state.userPicture = action.payload.image;
        state.error = '';
        state.isLogined = true;
      }
      return state;
    });
    builder.addCase(utils.authUtils.SignUpUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!';
      state.currentUser = null;
      state.isLogined = false;
    });

    builder.addCase(utils.authUtils.LogoutUser.fulfilled, (state, action) => {
      state.currentUser = null;
      state.isLogined = false;
      state.userPicture = '';
      state.error = '';
      state.status = '';
      return state;
    });
  },
});
