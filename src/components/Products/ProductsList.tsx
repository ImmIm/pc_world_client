import { Container } from '@mui/material';
import ryzen from '../../assets/Ryzen5.jpg';
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 2,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 3,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 4,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 5,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 6,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 7,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
  {
    id: 8,
    product_name: 'Ryzen 5',
    main_image: ryzen,
    frequency: '3200 Mhz',
    n_cores: 6,
    price: 1500,
  },
];
function ProductsList() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {products.map((el) => {
        return <ProductCard key={el.id} product={el} />;
      })}
    </Container>
  );
}

export default ProductsList;
