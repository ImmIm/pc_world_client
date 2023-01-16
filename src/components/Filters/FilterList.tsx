import { FormControl, FormLabel } from '@mui/material';
import React from 'react';
import { FilterOptions } from '../../types/types';
import Filter from './Filter';

function FilterList(props: { options: FilterOptions }) {


  return (

     <FormControl>
          <FormLabel>Filters</FormLabel>
      {props.options.map((el) => (
        <Filter data={el}/>
      ))}
    </FormControl>

  );
}

export default FilterList;
