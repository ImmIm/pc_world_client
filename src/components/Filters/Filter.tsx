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
  const minimal = Math.min(...props.data.data.map((el) => Number(el)));
  const maximum = Math.max(...props.data.data.map((el) => Number(el)));
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
        <>
          {props.data.optionName === 'price' ? null : (
            <FormGroup>
              <FormControlLabel
                label={''}
                control={
                  <Slider
                    aria-label={props.data.optionName}
                    valueLabelDisplay='auto'
                    marks={[{value: minimal, label: `${minimal}`}, {value: maximum, label: `${maximum}`}]}
                    min={minimal}
                    max={maximum}
                  />
                }
              />
            </FormGroup>
          )}
        </>
      )}

      <Divider />
    </>
  );
}

export default Filter;
