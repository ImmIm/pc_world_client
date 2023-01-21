import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button } from '@mui/material';

const fieldsAliases = {
  frequency: 'Frequency',
  n_cores: 'Cores',
};

export default function ProductCard(props: {
  product: {
    id: number;
    product_name: string;
    main_image: string;
    frequency: string;
    n_cores: number;
    price: number
  };
}) {
  let shortInfo = '';
  for (const [key, value] of Object.entries(props.product)) {
    if (
      key !== 'id' &&
      key !== 'product_name' &&
      key !== 'main_image' &&
      key !== 'price'
    ) {
      // @ts-ignore
      shortInfo += `${fieldsAliases[key]}: ${value} `;
    }
  }

  return (
    <Card
      sx={{
        width: '100%',
        height: '20vh',
        display: 'grid',
        gridTemplateColumns: '3fr 6fr 3fr',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img
          src={props.product.main_image}
          alt={props.product.product_name}
          style={{
            maxHeight: '15vh',
            width: 'auto',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}></img>
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Typography gutterBottom variant='h5' component='div' >
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
        <Button size='small'>Add to wishlist</Button>
      </CardActions>
      </CardContent>
      
    </Card>
  );
}
