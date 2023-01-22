import { Container, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useInView } from 'react-intersection-observer';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import dataUtils from '../../app/utils/dataUtils';

function ProductsList(props: { category: string }) {
  const [ref, inView, entry] = useInView({
    rootMargin: '200px 0px',
  });
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector((state) => state.data.products);
  const count = useAppSelector((state) => state.data.productCount);
  const maxProducts = useAppSelector((state) => state.data.maxProducts);
  const productCategory = useAppSelector((state) => state.data.category);
  const status = useAppSelector((state) => state.data.status);


  console.log(status);
  

  useEffect(() => {
    if (count < maxProducts) {
      dispatch(
        // @ts-ignore
        dataUtils.getProductsByCategory({
          category: props.category?.toLowerCase(),
          count,
        })
      );
    } else if (props.category.toLowerCase() !== productCategory) {
      dispatch(
        // @ts-ignore
        dataUtils.getProductsByCategory({
          category: props.category?.toLowerCase(),
          count: 0,
        })
      );
    }
  }, [props.category, inView]);

  
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {status !== 'ok' && count === 0 ? (
        <Skeleton sx={{ height: '100%', width: '100%' }} />
      ) : (
        <>
          {products.map((el) => {
            return (
              <ProductCard key={el.id} product={el} category={props.category} />
            );
          })}

          {count < maxProducts ? (
            <Box>
              <CircularProgress ref={ref} />
            </Box>
          ) : null}
        </>
      )}
    </Container>
  );
}

export default ProductsList;
