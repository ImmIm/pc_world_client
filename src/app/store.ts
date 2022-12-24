import {
  configureStore,
  ThunkAction,
  Action,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginData } from '../types/types';

const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginUserAutomatic = createAsyncThunk(
  'auth/loginUserAutomatic',
  async function () {
    const data: { user: any; image: any } = {
      user: '',
      image: '',
    };
    try {
      data.user = await (
        await axios.get('http://localhost:3001/api/v1/private/auth/login', {
          withCredentials: true,
        })
      ).data.data[0];
      data.image = URL.createObjectURL(
        await getImage(`http://localhost:3001/static/img/${data.user.image}`)
      );
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data;
      } else {
        return null;
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async function (info: loginData) {
    const data: { user: any; image: any } = {
      user: '',
      image: '',
    };
    try {
      data.user = await (
        await axios.post(
          'http://localhost:3001/api/v1/private/auth/login',
          { email: info.email, password: info.password },
          { withCredentials: true }
        )
      ).data.data[0];
      data.image = URL.createObjectURL(
        await getImage(`http://localhost:3001/static/img/${data.user.image}`)
      );
      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response !== undefined) {
        return err.response.data;
      } else {
        return null;
      }
    }
  }
);

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
    signUpModal: false
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
        state.error = ''
        state.isLogined = true;
      }
      return state;
    });
    builder.addCase(loginUserAutomatic.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!'
      state.currentUser = null;
      state.isLogined = false
    });

    builder.addCase(loginUser.pending, (state, action) => {});
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      if (action.payload === null) {
        state.error = 'Something went wrong!'
        state.isLogined = false;
      } else if (action.payload.status === 'fail') {
        state.error = action.payload.message;
        state.isLogined = false;
      } else {
        state.currentUser = action.payload.user;
        state.userPicture = action.payload.image;
        state.error = ''
        state.isLogined = true;
      }
      return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = 'Something went wrong!'
      state.currentUser = null;
      state.isLogined = false
    });
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
    toggleAuthBackdrop(state){
      state.authBackdrop = false;
      state.loginModal = false;
      state.signUpModal = false;
    }
    ,
    toggleLoginModal(state) {

      if (state.loginModal) {
        state.loginModal = false
        state.authBackdrop = false
      }else{
        state.loginModal = true
        state.authBackdrop = true
      }
     
      return state;
    },
    toggleSignUpModal(state) {
      if (state.signUpModal) {
        state.signUpModal = false
        state.authBackdrop = false
      }else{
        state.signUpModal = true
        state.authBackdrop = true
      }  
      return state;
    },
  },
});

export const store = configureStore({
  preloadedState,
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
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
