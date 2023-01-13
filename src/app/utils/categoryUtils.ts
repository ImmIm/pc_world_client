import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { isCategoryArray } from '../../types/typeGuards';


const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    return error;
  }
};

const getCategories = createAsyncThunk(
  'category/getCategories',
  async function () {
    try {
      const response = await (
        await axios.get('http://localhost:3001/api/v1/public/categories', {})
      ).data.data;

      if (!isCategoryArray(response)) {
        return { status: 'fail', message: 'not an array' };
      }

      for (const el of response) {
        const name = el.name[0].toUpperCase() + el.name.slice(1);
        el.name = name;
        const pictureURL = el.category_picture;
        const picture = await getImage(
          `http://localhost:3001/static/categories/${pictureURL}`
        );
        el.category_picture = URL.createObjectURL(picture);
      }
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data;
      } else {
        return null;
      }
    }
  }
);

const categoryUtils = {
  getCategories,
};

export default categoryUtils;
