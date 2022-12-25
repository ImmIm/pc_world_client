import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/system';
import { Divider } from '@mui/material';

export default function StatusBar() {
  return (
    <Container
      maxWidth={'xl'}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'bisque',
        gap: '10px'
      }}>
      <Box style={{textDecoration: 'underline', color: 'black'}}>+972 5x xxx-xx-xx</Box>
      <Divider orientation="vertical" flexItem />
      <Box>
        <NavLink to='/delivery_info' style={{textDecoration: 'none', color: 'black'}}>Delivery info</NavLink>
      </Box>
    </Container>
  );
}
