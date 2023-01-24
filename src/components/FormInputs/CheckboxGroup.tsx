import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from '@mui/material';
import React from 'react';
import { FilterOptions } from '../../types/types';

const opNames = {
  model: 'Model',
  socket: 'Socket',
  producer_info: 'Producer',
  producer_country: 'Producer country',
};

function CheckboxGroup(props: {
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
        return (
          <Box
            key={el.optionName}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '6px',
            }}>
            {/* 
            //@ts-ignore */}
            <Typography>{opNames[el.optionName]}</Typography>
            {el.data.map((element) => {
              //@ts-ignore
              const checked = props.formik.values[el.optionName].find((el) => el === element
              ) === undefined;

              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      //@ts-ignore
                      checked={!checked}
                      name={el.optionName}
                      onChange={props.formik.handleChange}
                      value={element}
                    />
                  }
                  label={element}
                  key={element}
                />
              );
            })}
            <Divider />
          </Box>
        );
      })}
    </>
  );
}

export default CheckboxGroup;
