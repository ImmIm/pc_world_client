import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

type Props = {
  img: string;
  title: string;
};

export default function CategoryCard(props: Props) {
  const navigate = useNavigate();

  const navHandler = () => {
    navigate(`category/${props.title}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        maxHeight: '100px',
        cursor: 'pointer',
      }}
      onClick={navHandler}>
      <Box>
        <img
          src={props.img}
          alt={props.title}
          style={{
            maxHeight: '50px',
            width: 'auto',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}></img>
      </Box>
        <Typography
          variant='body1'
          component='div'
          sx={{ textDecoration: 'none', padding: 0 }}>
          {props.title}
        </Typography>
    </Card>
  );
}
