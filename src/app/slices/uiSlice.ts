import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from '../preloadedState';
import utils from '../utils/utils';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: preloadedState.ui,
    reducers: {
      toggleTheme(state) {
        if (state.theme === 'dark') {
          state.theme = 'bright';
          document.body.style.backgroundColor = '#E7DBC6';
          return state;
        }
        document.body.style.backgroundColor = '#31708E';
        state.theme = 'dark';
        return state;
      },
      toggleAuthBackdrop(state) {
        state.authBackdrop = false;
        state.loginModal = false;
        state.signUpModal = false;
      },
      toggleLoginModal(state) {
        if (state.loginModal) {
          state.loginModal = false;
          state.authBackdrop = false;
        } else {
          state.loginModal = true;
          state.authBackdrop = true;
        }
  
        return state;
      },
      toggleSignUpModal(state) {
        if (state.signUpModal) {
          state.signUpModal = false;
          state.authBackdrop = false;
        } else {
          state.signUpModal = true;
          state.authBackdrop = true;
        }
        return state;
      },
    },
  });