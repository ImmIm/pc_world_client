import { Skeleton } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useFormik } from 'formik';
import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import filtersUtils from '../../app/utils/filtersUtils';
import { FilterOptions } from '../../types/types';
import CategoryFilters from '../Filters/CategoryFilters';
import ProductsList from '../Products/ProductsList';
import filterFEUtils from '../utils/filterUtils';

function Category() {
  const {categoryid} = useParams();

  const options: FilterOptions = useAppSelector(
    (state) => state.filters.options
  );
  const status = useAppSelector((state) => state.filters.status);
  const dispatch = useAppDispatch();
  const checkboxOptionsNames = filterFEUtils.getCheckboxOptionsNames(options);

  const sliderOptionsNames = filterFEUtils.getSliderOptionsNames(options);



  useEffect(() => {
    // @ts-ignore
    dispatch(filtersUtils.getFilters(categoryid?.toLowerCase()));
  }, [categoryid, dispatch]);

  
  const initilalCheck = checkboxOptionsNames.reduce(
    (acc, curr) => ({ ...acc, [curr]: [] }),
    {}
  );

  const initialSlider = sliderOptionsNames.reduce(
    (acc, curr) => ({ ...acc, [curr]: '' }),
    {}
  );

  const initPrice = {
    maxPrice: '',
    minPrice: '',
  };

  const formInit = {
    ...initPrice,
    ...initilalCheck,
    ...initialSlider
  };

  return (
    <Container
      component={'section'}
      maxWidth='xl'
      disableGutters
      sx={{ display: 'grid', gridTemplateColumns: '3fr 9fr' }}>
      {!(status === 'ok')? <Skeleton /> :<CategoryFilters options={options} formInitialValues={formInit} categoryid={categoryid?.toLowerCase()}/>}
      <ProductsList />
    </Container>
  );
}

export default Category;
