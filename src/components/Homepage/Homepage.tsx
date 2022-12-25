import React from 'react';
import CategoryCard from './categoryCard';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import ads1 from './../../assets/Add1.png';
import ads2 from './../../assets/Add2.png';
import ads3 from './../../assets/Add3.png';
import cpu_cat from './../../assets/cpu_category.png'
import gpu_cat from './../../assets/gpu_category.png'
import motherboard_cat from './../../assets/motherboard_category.png'
import ram_cat from './../../assets/ram_category.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Divider } from '@mui/material';

export default function Homepage() {
  // same structure on server
  const category = [
    { name: 'CPU', category_picture: cpu_cat, description: '' },
    { name: 'GPU', category_picture: gpu_cat, description: '' },
    { name: 'Motherboards', category_picture: motherboard_cat, description: '' },
    { name: 'Ram', category_picture: ram_cat, description: '' },
  ];

  const ads = [ads1, ads2, ads3];

  return (
    <Container maxWidth='xl' component={'main'} sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
        {category.map((el) => (
          <CategoryCard key={el.name} title={el.name} img={el.category_picture} />
        ))}
      </Box>
      <Divider />
      <Box maxWidth={'xl'}>
        <Carousel showArrows={true}>
          {ads.map((el) => (
            <div key={el}>
              <img src={el} alt={el} />
            </div>
          ))}
        </Carousel>
      </Box>
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {category.map((el) => (
          <CategoryCard title={el.name} img={el.category_picture} />
        ))}
      </Box> */}
    </Container>
  );
}
