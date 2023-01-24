import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Product } from '../../types/types';

export const getImage: any = async (url: string) => {
  try {
    return await (
      await axios.get(url, { withCredentials: true, responseType: 'blob' })
    ).data;
  } catch (error) {
    return error;
  }
};

// const getProductsByCategory = createAsyncThunk(
//   'data/getProductByCategory',
//   async function (data: { category: string; count: number }) {
//     if (data.count === undefined) {
//       data.count = 0;
//     }
//     try {
//       const result: Product[] = await (
//         await axios.get(
//           `http://localhost:3001/api/v1/public/products?category=${data.category}&count=${data.count}`
//         )
//       ).data.data;

//       return { category: data.category, data: result };
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response !== undefined) {
//         return error.response.data;
//       } else {
//         return null;
//       }
//     }
//   }
// );

const getProductsByFilters = createAsyncThunk(
  'data/getProductsByFilters',
  async function (data: { category: string; count: number; filters: {} }) {

    console.log('fetching ');
    

    let additionalQuery = '';

    for (const el in data.filters) {
      // @ts-ignore
      if (Array.isArray(data.filters[el])) {
        // @ts-ignore
        const ar: string[] = data.filters[el];
        if (ar.length !== 0) {
          additionalQuery += `&`
          for (const opt of ar) {
            additionalQuery += `${el}='${opt}'&`
          }
        }
      } else {
        // @ts-ignore
        if (data.filters[el] !== '') {
          //@ts-ignore
          const num = Number(data.filters[el]);
          additionalQuery += `&${el}=${num}`;
        }
      }
    }

    if (data.count === undefined) {
      data.count = 0;
    }
    try {
      const result: Product[] = await (
        await axios.get(
          `http://localhost:3001/api/v1/public/products?category=${data.category}&count=${data.count}${additionalQuery}`
        )
      ).data.data;

      return { category: data.category, data: result };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response !== undefined) {
        return error.response.data;
      } else {
        return null;
      }
    }
  }
);


const getFullProduct = createAsyncThunk( 'data/getFullProduct',
async function (id: number) {
  try {
    return await (
      await axios.get(`http://localhost:3001/api/v1/public/products/${id}`, { withCredentials: true})
    ).data;
  } catch (error) {
    return error;
  }
})



const dataUtils = {
  // getProductsByCategory,
  getImage,
  getProductsByFilters,
  getFullProduct
};

export default dataUtils;
