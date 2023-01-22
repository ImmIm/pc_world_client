import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Filter } from '../../types/types';




const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    return error;
  }
};

const getFilters = createAsyncThunk(
  'filters/getFilters',
  async function (category: string) {
    try {
      const result: Filter[] = await (
        await axios.get(
          `http://localhost:3001/api/v1/public/filters?category=${category}`
        )
      ).data.data;
      return result
    } catch (error) {
      if (axios.isAxiosError(error) && error.response !== undefined) {
        return error.response.data;
      } else {
        return null;
      }
    }
  }
);

const filtersUtils = {
  getFilters,
};

export default filtersUtils;
