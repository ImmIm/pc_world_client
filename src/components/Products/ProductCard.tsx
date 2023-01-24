import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Skeleton } from '@mui/material';
import { Product } from '../../types/types';
import dataUtils from '../../app/utils/dataUtils';
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useInView } from 'react-intersection-observer';

const fieldsAliases = {
  frequency: 'Frequency',
  n_cores: 'Cores',
  model: 'Model',
  socket: 'Socket',
  producer_info: 'Producer',
  producer_country: 'Country',
};

export default function ProductCard(props: {
  product: Product;
  category: string;
}) {
  const [picture, setPicture] = useState('');
  let shortInfo = '';
  for (const [key, value] of Object.entries(props.product)) {
    if (
      key !== 'id' &&
      key !== 'product_name' &&
      key !== 'main_picture' &&
      key !== 'price' &&
      key !== 'product_id' &&
      key !== 'category_id'
    ) {
      // @ts-ignore
      shortInfo += `${fieldsAliases[key]}: ${value} `;
    }
  }

  const navigate = useNavigate();

  console.log(props.category);
  

  const navHandler = (id: number) => {
    navigate(`product/${id}`);
  };

  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    const getPicture = async () => {
      if (inView) {
        const pic = await dataUtils.getImage(
          `http://localhost:3001/static/products/${props.category?.toLowerCase()}/${
            props.product.main_picture
          }`
        );

        const picUrl = URL.createObjectURL(pic);
        setPicture(picUrl);
      }
    };

    getPicture();
  }, [inView]);

  return (
    <Card
      ref={ref}
      sx={{
        width: '100%',
        height: '15rem',
        display: 'grid',
        gridTemplateColumns: '3fr 6fr 3fr',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {picture === '' ? (
          <CircularProgress />
        ) : (
          <img
            src={picture}
            alt={props.product.product_name}
            style={{
              maxHeight: '10rem',
              width: 'auto',
              objectFit: 'cover',
            }}></img>
        )}
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Typography gutterBottom variant='h5' component='div' onClick={() => navHandler(props.product.id)}>
          {props.product.product_name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {shortInfo}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.product.price} $
        </Typography>
        <CardActions>
          <Button size='small'>Add to cart</Button>
          <IconButton aria-label='add to wishlist' color='primary'>
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
