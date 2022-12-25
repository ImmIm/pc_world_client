import Container from '@mui/material/Container';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ProductsList from '../Products/ProductsList';
import CategoryFilters from './CategoryFilters';

function Category() {
  const { categoryid } = useParams();

  

  const category = useAppSelector((state) => state.data.categories);

  console.log(category.find(el => el.name === categoryid));

  return (
    <Container component={'main'} maxWidth={'xl'}>
      <CategoryFilters />
      <ProductsList />
    </Container>
  );
}

export default Category;
