import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Slider,
} from '@mui/material';
import React from 'react';

function Filter(props: { data: { optionName: string; data: string[] } }) {
  return (
    <>
      <FormLabel>{props.data.optionName}</FormLabel>
      {Number.isNaN(Number(props.data.data[0])) ? (
        <FormGroup>
          {props.data.data.map((el) => {
            return (
              <FormControlLabel key={el} control={<Checkbox />} label={el} />
            );
          })}
        </FormGroup>
      ) : (
        <FormGroup>
          <FormControlLabel
            label={''}
            control={
              <Slider
                aria-label={props.data.optionName}
                valueLabelDisplay='auto'
                marks
                min={Math.min(...props.data.data.map((el) => Number(el)))}
                max={Math.max(...props.data.data.map((el) => Number(el)))}
              />
            }
          />
        </FormGroup>
      )}

      <Divider />
    </>
  );
}

export default Filter;
