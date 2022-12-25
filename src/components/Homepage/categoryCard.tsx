import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';


type Props = {
  img: string;
  title: string;
};

export default function CategoryCard(props: Props) {
  return (
    <NavLink to={`category/${props.title}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          maxWidth: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}>
        <Box>
          <img
            src={props.img}
            alt={props.title}
            style={{
              maxWidth: '80px',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}></img>
        </Box>

        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ textDecoration: 'none' }}>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
}
