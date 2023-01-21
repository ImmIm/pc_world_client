import React from 'react'
import { InputAdornment, TextField } from '@mui/material';

function PriceInput(props: {id: string, name: string, label: string, formik: any}) {
  return (
    <TextField
    sx={{marginTop: '10px'}}
    type={'number'}
    id={props.id}
    name={props.name}
    label={props.label}
    value={props.formik.values[props.name]}
    onChange={props.formik.handleChange}
    error={props.formik.touched.minPrice && Boolean(props.formik.errors.minPrice)}
    helperText={props.formik.touched.minPrice && props.formik.errors.minPrice}
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
  />
  )
}

export default PriceInput