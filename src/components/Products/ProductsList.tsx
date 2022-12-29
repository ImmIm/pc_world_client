import { Container } from '@mui/material'
import ryzen from '../../assets/Ryzen5.jpg'
import React from 'react'
import ProductCard from './ProductCard'


const products = [{id: 1, name: 'Ryzen 5', image:ryzen, frequency: '3200 Mhz', cores: 6 }]
function ProductsList() {
  return (
    <Container >
      {products.map((el) => {
       return <ProductCard />
      })}
    </Container>
  )
}

export default ProductsList