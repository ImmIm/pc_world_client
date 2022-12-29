import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { loginUserAutomatic, loginUser, SignUpUser, LogoutUser} from './utils';
import cpu_cat from '../assets/cpu_category.png';
import gpu_cat from '../assets/gpu_category.png';
import motherboard_cat from '../assets/motherboard_category.png';
import ram_cat from '../assets/ram_category.png';

export const preloadedState = {
  auth: {
    currentUser: null,
    userPicture: '',
    isLogined: false,
    status: '',
    error: '',
  },
  ui: {
    theme: 'bright',
    authBackdrop: false,
    loginModal: false,
    signUpModal: false,
  },
  data: {
    categories: [
      { id: 1, name: 'CPU', category_picture: cpu_cat, description: '' },
      { id: 2, name: 'GPU', category_picture: gpu_cat, description: '' },
      {id: 3, 
        name: 'Motherboards',
        category_picture: motherboard_cat,
        description: '',
      },
      { id: 4, name: 'Ram', category_picture: ram_cat, description: '' },
    ],
    filters: {
      frequency: [1500, 2000, 2500, 3000, 3500],
      cores: [1, 2, 3, 4, 5, 6],
    }
  },
};

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
    builder.addCase(loginUserAutomatic.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(loginUserAutomatic.fulfilled, (state, action) => {
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
    });
    builder.addCase(loginUserAutomatic.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!';
      state.currentUser = null;
      state.isLogined = false;
    });

    builder.addCase(loginUser.pending, (state, action) => {});
    builder.addCase(loginUser.fulfilled, (state, action) => {
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
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!';
      state.currentUser = null;
      state.isLogined = false;
    });

    builder.addCase(SignUpUser.pending, (state, action) => {});
    builder.addCase(SignUpUser.fulfilled, (state, action) => {
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
    builder.addCase(SignUpUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!';
      state.currentUser = null;
      state.isLogined = false;
    });

    builder.addCase(LogoutUser.fulfilled, (state, action) => {
      state.currentUser = null;
      state.isLogined = false;
      state.userPicture = '';
      state.error = ''
      state.status = ''
      return state
    })
  },
});

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

export const dataSlice = createSlice({
  name: 'data',
  initialState: preloadedState.data,
  reducers: {
    loadCategories(state) {},
  },
});

export const store = configureStore({
  preloadedState,
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    data: dataSlice.reducer
  },
});
export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
