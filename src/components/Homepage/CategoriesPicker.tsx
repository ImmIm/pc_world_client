import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import CategoryCard from './categoryCard';

function CategoriesPicker() {
  const category = useAppSelector((state) => state.data.categories);
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
        gap:'20px',
        padding: '0',
        margin: '0'
      }}>
      {category.map((el) => (
        <CategoryCard key={el.name} title={el.name} img={el.category_picture} />
      ))}
    </Box>
  );
}

export default CategoriesPicker;
