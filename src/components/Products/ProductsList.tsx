import { Container, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useInView } from 'react-intersection-observer';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import dataUtils from '../../app/utils/dataUtils';
import { dataActions, filtersActions } from '../../app/store';
import { useNavigate } from 'react-router-dom';

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
  const filters = useAppSelector((state) => state.filters.selectedOptions);
  const filtersStatus = useAppSelector((state) => state.filters.filtering);
  const errorStatus = useAppSelector((state) => state.data.error);




  console.log(maxProducts);
  

  useEffect(() => {
    console.log('Use effect');

    if (props.category !== productCategory) {
      dispatch(dataActions.clearProducts());
      dispatch(
        dataUtils.getProductsByFilters({
          category: props.category,
          count: 0,
          filters,
        })
      );
    } else if (count < maxProducts) {
      if (filtersStatus) {
        dispatch(
          dataUtils.getProductsByFilters({
            category: props.category,
            count: 0,
            filters,
          })
        );
      } else {
        dispatch(
          dataUtils.getProductsByFilters({
            category: props.category,
            count,
            filters,
          })
        );
      }
    } else {
      if (filtersStatus) {
        dispatch(
          dataUtils.getProductsByFilters({
            category: props.category,
            count: 0,
            filters,
          })
        );
      }
    }
  }, [filters, filtersStatus, inView]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <>
        {status !== 'ok' && count === 0 ? (
          <>
            {errorStatus === 'Not found' ? (
              <Typography sx={{margin: '20rem'}}>Soory, our search not found that</Typography>
            ) : (
              <Skeleton sx={{ height: '100%', width: '100%' }} />
            )}
          </>
        ) : (
          <>
            {products.map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  product={el}
                  category={props.category}
                />
              );
            })}
          </>
        )}

        {count < maxProducts ? (
          <Box>
            <CircularProgress ref={ref} />
          </Box>
        ) : null}
      </>
    </Container>
  );
}

export default ProductsList;
