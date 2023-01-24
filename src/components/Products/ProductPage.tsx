import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import dataUtils from '../../app/utils/dataUtils';
import { Product } from '../../types/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useInView } from 'react-intersection-observer';

function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // @ts-ignore
  const product: Product = useAppSelector((state) => state.data.currentProduct);

  useEffect(() => {
    // @ts-ignore
    dispatch(dataUtils.getFullProduct(Number(id)));
  }, [id]);

  return (
    <>
      <Typography>Here will be product with id {id}</Typography>
    </>
  );
}

export default ProductPage;
