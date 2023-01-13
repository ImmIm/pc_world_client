import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginData, signUpData } from '../../types/types';

const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    return error;
  }
};

const loginUserAutomatic = createAsyncThunk(
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
      ).data.data;
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

const loginUser = createAsyncThunk(
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
      ).data.data;

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

const SignUpUser = createAsyncThunk(
  'auth/signUp',
  async function (info: signUpData) {
    const data: { user: any; image: any } = {
      user: '',
      image: '',
    };
    try {
      data.user = await (
        await axios.post(
          'http://localhost:3001/api/v1/private/auth/signup',
          {
            first_name: info.first_name,
            last_name: info.last_name,
            email: info.email,
            password: info.password,
          },
          { withCredentials: true }
        )
      ).data.data;

      console.log(data.user);

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

const LogoutUser = createAsyncThunk('auth/Logout', async function () {
  const response = await (
    await axios.get('http://localhost:3001/api/v1/private/auth/logout', {
      withCredentials: true,
    })
  ).data;

  return response;
});

const authUtils = {
  loginUserAutomatic,
  loginUser,
  SignUpUser,
  LogoutUser,
};

export default authUtils;
