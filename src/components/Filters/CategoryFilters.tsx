import { Box, Button, Typography, Divider } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { dataActions, filtersActions } from '../../app/store';
import { FilterOptions } from '../../types/types';
import CheckboxGroup from '../FormInputs/CheckboxGroup';
import PriceInput from '../FormInputs/PriceInput';
import SliderGroup from '../FormInputs/SliderGroup';
import filterFEUtils from '../utils/filterUtils';

function CategoryFilters(props: {
  categoryid: string | undefined;
  formInitialValues: {};
  options: FilterOptions;
}) {
  const dispatch = useAppDispatch();
  const sliderOptions = filterFEUtils.getSliderOptions(props.options);
  const checkboxOptions = filterFEUtils.getCheckboxOptions(props.options);
  const filtersStatus = useAppSelector((state) => state.filters.filtering);
  const filters = useAppSelector((state) => state.filters.selectedOptions);

  useEffect(() => {
    dispatch(filtersActions.changeSelectedOptions(props.formInitialValues));
    dispatch(filtersActions.stopFiltering());
  }, []);

  const formik = useFormik({
    initialValues: props.formInitialValues,
    enableReinitialize: true,
    onReset: (values, { setValues }) => {
      if(JSON.stringify(props.formInitialValues) !== JSON.stringify(values)){
        dispatch(filtersActions.changeSelectedOptions(props.formInitialValues));
        dispatch(filtersActions.stopFiltering());
        dispatch(dataActions.clearProducts());
      }
    },
    onSubmit: (values) => {
      if (JSON.stringify(filters) !== JSON.stringify(values)) {
        dispatch(dataActions.clearProducts());
      }
      dispatch(
        filtersActions.toggleFiltering(
          JSON.stringify(filters) !== JSON.stringify(values)
        )
      );
      dispatch(filtersActions.changeSelectedOptions(values));
      // if (JSON.stringify(filters) !== JSON.stringify(values)) {
      //   dispatch(filtersActions.isFiltering());
      //   dispatch(filtersActions.changeSelectedOptions(values));
      // } else {
      //   dispatch(filtersActions.isFiltering());
      //   dispatch(filtersActions.changeSelectedOptions(values));
      // }

      // else if(JSON.stringify(formik.initialValues) !== JSON.stringify(values)){
      // dispatch(filtersActions.stopFiltering());
      // }else{
      //   dispatch(filtersActions.isFiltering());
      //   dispatch(filtersActions.changeSelectedOptions(values));
      // }
    },
  });

  return (
    <Box component={'aside'} sx={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography>Price</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <PriceInput
            id='minPrice'
            name='minPrice'
            label='From'
            formik={formik}
          />
          <PriceInput
            id='maxPrice'
            name='maxPrice'
            label='To'
            formik={formik}
          />
        </Box>
        <Divider />
        <SliderGroup
          options={sliderOptions}
          values={formik.values}
          formik={formik}
        />
        <CheckboxGroup
          options={checkboxOptions}
          values={formik.values}
          formik={formik}
        />

        <Box sx={{ display: 'flex' }}>
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
          <Button
            color='error'
            variant='contained'
            fullWidth
            onClick={formik.handleReset}>
            Reset filters
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CategoryFilters;
