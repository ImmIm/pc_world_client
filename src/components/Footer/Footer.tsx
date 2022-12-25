import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <Container  maxWidth='xl' component={'footer'}  sx={{display: "flex", justifyContent: 'space-between', minHeight: '150px', alignItems: 'center', backgroundColor: 'grey', color: 'white',
    fontWeight: "bolder", fontSize: '1.3rem'}}>
        <Box sx={{maxWidth: '300px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Box>
        <Box sx={{display: 'flex'}}>
            <Box>Pushkin Str., House of Colotushkin</Box>
            <Box sx={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <LaptopChromebookIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <NavLink
            to={'/'}
            end
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              PC World
            </Typography>
          </NavLink>
                <Box>Kyril Savich (c) 2022</Box>
            </Box>
        </Box>
    </Container>
  )
}
