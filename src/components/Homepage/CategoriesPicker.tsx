import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import CategoryList from './CategoryList';

function CategoriesPicker() {
  const category = useAppSelector((state) => state.categories.categories);
  const status = useAppSelector((state) => state.categories.status);

  console.log(status);
  
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxHeight: '100px',
        border: '1px sold grey',
        gap: '20px',
        padding: '0',
        margin: '0',
      }}>
      {status === 'pending' ? <Skeleton /> : <CategoryList category={category}/>}
    </Box>
  );
}

export default CategoriesPicker;
