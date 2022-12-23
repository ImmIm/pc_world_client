import {
  Alert,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, avatars } from '../../app/store';

function Settings() {
  const userInfo = useSelector((state) => state.auth);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [pictureOpen, setPictureOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePictureOpen = () => {
    setPictureOpen(true);
  };

  const handlePictureClose = () => {
    setPictureOpen(false);
  };

  const handleSnackOpen = () => {
    setSnackOpen(true);
  };

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const submitChangeNameHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length > 0) {
      setError(false);
      dispatch(authActions.changeName(userName));
      handleClose();
      handleSnackOpen();
    } else {
      setError(true);
    }
  };

  const choseNewPictureHandler = (index) =>{
    dispatch(authActions.changePicture(index))
    handlePictureClose()

  }

  return (
    <Grid container spacing={3} maxWidth={'100%'} sx={{ margin: '0 auto' }}>
      <Grid item xs={12}>
        <Paper elevation={2}>
          <Typography
            variant='body2'
            color='text.primary'
            component={'h2'}
            sx={{ fontSize: 'large' }}>
            Settings
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} md={8}>
        <Paper elevation={2}>
          <Typography>
            Your name: {userInfo.currentUser}{' '}
            <Button onClick={handleClickOpen}> Change name</Button>
          </Typography>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>ChangeName</DialogTitle>
            <DialogContent>
              <DialogContentText>Type your new name.</DialogContentText>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='New name'
                type='text'
                fullWidth
                required
                error={error}
                variant='standard'
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type={'submit'} onClick={submitChangeNameHandler}>
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleSnackClose}>
            <Alert
              onClose={handleSnackClose}
              severity='info'
              sx={{ width: '100%' }}>
              Name has changed!
            </Alert>
          </Snackbar>
        </Paper>
        <Paper elevation={2}>
          <Typography>
            <Button onClick={handlePictureOpen}>Change profile picture</Button>
          </Typography>
          <Dialog open={pictureOpen} onClose={handlePictureClose}>
            <DialogTitle>Change picture</DialogTitle>
            <DialogContent>
            {avatars.map((item, index) => (
            <Avatar alt='Option' src={item} key={index} onClick={() => (choseNewPictureHandler(index))}/>
          ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handlePictureClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Settings;
