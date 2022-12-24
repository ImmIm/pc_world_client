import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

import { useAppSelector } from '../../app/hooks';

function UserProfile() {
  const userInfo = useAppSelector((state) => state.auth.currentUser);
  const userPicture = useAppSelector((state) => state.auth.userPicture);

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
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={6}>
        <Card>
          <Typography
            variant='body2'
            color='text.primary'
            sx={{ fontSize: 'large' }}>
            Games played
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque non ullamcorper felis, sit amet auctor enim. Integer
            eleifend porta lacus, at tincidunt urna. Curabitur blandit aliquam
            dolor quis aliquam. Morbi ac massa et diam maximus faucibus nec id
            erat. Donec pellentesque est feugiat, laoreet diam vel, dictum est.
            Maecenas sem nulla, eleifend nec porta id, tempus vel mi. Curabitur
            ut tristique leo. Vestibulum dapibus euismod urna, ut vulputate
            mauris tristique et. Sed fringilla lacus eros, nec bibendum enim
            vulputate sit amet. Vivamus at nulla id erat pharetra rutrum. Donec
            aliquam velit id turpis posuere condimentum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Donec vehicula tellus mollis
            accumsan venenatis. Vestibulum volutpat tristique nulla ut commodo.
            In hac habitasse platea dictumst. Sed consectetur vulputate magna
            nec commodo. Ut vel odio pellentesque leo dictum laoreet. Aenean non
            dui ipsum. Donec at purus ac justo mollis venenatis. Quisque non
            condimentum velit, at suscipit arcu. Aenean massa libero, venenatis
            sit amet efficitur id, interdum fermentum ante. Aenean venenatis
            eleifend mauris, in mattis nisl consectetur eget. Ut iaculis nisi
            erat, a tincidunt magna consectetur vel.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserProfile;
