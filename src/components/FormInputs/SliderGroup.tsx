import { Box, Divider, Slider, Typography } from '@mui/material';
import { current } from '@reduxjs/toolkit';
import { access } from 'fs';
import React from 'react';
import { FilterOptions } from '../../types/types';

const opNames = {
  n_cores: 'Number of cores',
  frequency: 'CPU frequency',
};

function SliderGroup(props: {
  options: ({
    optionName: string;
    data: string[];
  } & FilterOptions)[];
  values: {};
  formik: any;
}) {
  return (
    <>
      {props.options.map((el) => {
        const arr: number[] = [];
        el.data.map((el) => {
          arr.push(Number(el));
        });
        const min = Math.min(...arr);
        const max = Math.max(...arr);

        let marks = [
          { value: min, label: `${min}` },
          { value: max, label: `${max}` },
          { value: max / 2, label: `${max / 2}` },
        ];

        return (
          <Box
            key={el.optionName}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '6px',
              margin: '10px'
            }}>
            {/* 
                //@ts-ignore */}
            <Typography>{opNames[el.optionName]}</Typography>

            <Slider
              // @ts-ignore
              aria-label={opNames[el.optionName]}
              name={el.optionName}
              value={Number(props.formik.values[el.optionName])}
              onChange={props.formik.handleChange}
              valueLabelDisplay="auto"
              marks={marks}
              min={min}
              max={max}
            />

            <Divider />
          </Box>
        );
      })}
    </>
  );
}

export default SliderGroup;
