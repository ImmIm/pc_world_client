import { Box, Button, Typography, Divider } from '@mui/material';
import { useFormik } from 'formik';
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
  const sliderOptions = filterFEUtils.getSliderOptions(props.options);
  const checkboxOptions = filterFEUtils.getCheckboxOptions(props.options);

  const formik = useFormik({
    initialValues: props.formInitialValues,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box component={'aside'} sx={{display: 'flex', flexDirection: 'column'}}>
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
        <SliderGroup options={sliderOptions} values={formik.values} formik={formik}/>
        <CheckboxGroup options={checkboxOptions} values={formik.values} formik={formik}/>



        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default CategoryFilters;
