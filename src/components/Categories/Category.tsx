import Container from '@mui/material/Container';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ProductsList from '../Products/ProductsList';
import CategoryFilters from './CategoryFilters';

function Category() {
  const { categoryid } = useParams();
  const category = useAppSelector((state) =>
  // @ts-ignore
    state.categories.categories.find((el) => el.name === categoryid)
  );

  return (
    <Container
      disableGutters
      component={'main'}
      maxWidth={'xl'}
      sx={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
      <CategoryFilters />
      <ProductsList />
    </Container>
  );
}

export default Category;
