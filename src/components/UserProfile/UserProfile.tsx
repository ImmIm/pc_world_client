import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';

function UserProfile() {
  const userInfo = useAppSelector((state) => state.auth.currentUser);
  const userPicture = useAppSelector((state) => state.auth.userPicture);
  const navigate = useNavigate()

  if (userInfo === null) {
    return (
      <div>
        Error
      </div>
    )
  }

  
  return (
    <Grid container spacing={3} maxWidth={'80%'} sx={{ margin: '0 auto' }}>
      <Grid item xs={12} sx={{ padding: '0' }}>
        <Paper elevation={2}>
          <Typography
            variant='body2'
            color='text.primary'
            component={'h2'}
            sx={{ fontSize: 'large' }}>
            User profile
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card>
          <CardContent>
            <Typography
              variant='body2'
              color='text.primary'
              sx={{ fontSize: 'large' }}>
              {/* 
                //@ts-ignore */}
              {userInfo.first_name}
            </Typography>
            <CardMedia
              component='img'
              src={userPicture}
              alt='Profile picture'
              width={'50%'}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card>
          <Typography
            variant='h2'
            color='text.primary'
            sx={{ fontSize: 'large' }}>
            Summary
          </Typography>
          {/* 
          //@ts-ignore */}
          <Typography>First Name: {userInfo.first_name}</Typography>
          {/* 
          //@ts-ignore */}
          <Typography>Last Name: {userInfo.last_name}</Typography>
          {/* 
          //@ts-ignore */}
          <Typography>Email: {userInfo.password}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserProfile;
