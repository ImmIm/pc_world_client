import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { uiActions } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function AppBackdrop(props) {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(uiActions.toggleLoginBackdrop())
  };
  const backdropStatus = useAppSelector((state) => state.ui.loginBackdrop);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropStatus}
        onClick={handleClose}>
            {props.children}
        </Backdrop>
    </>
  );
}
