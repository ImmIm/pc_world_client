import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { count } from 'console';
import { Filter, Product } from '../../types/types';
import categoryUtils from './categoryUtils';

export const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    return error;
  }
};


const getProductsByCategory = createAsyncThunk(
  'data/getProductByCategory',
  async function (data: { category: string; count: number }) {
    if (data.count === undefined) {
      data.count = 0;
    }
    try {
      const result: Product[] = await (
        await axios.get(
          `http://localhost:3001/api/v1/public/products?category=${data.category}&count=${data.count}`
        )
      ).data.data;


      return {category: data.category, data: result };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response !== undefined) {
        return error.response.data;
      } else {
        return null;
      }
    }
  }
);

const dataUtils = {
  getProductsByCategory,
  getImage,
};

export default dataUtils;
