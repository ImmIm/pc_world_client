import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import Typography from '@mui/material/Typography';
import utils from '../../app/utils/utils';
import { uiActions } from '../../app/store';

function SignUp() {
  const dispatch = useAppDispatch();
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRepeatPassword, setUserRepeatPassword] = useState('');
  const [errorFirstName, setFirstNameError] = useState(false);
  const [errorLastName, setLastNameError] = useState(false);
  const [errorEmail, setEmailError] = useState(false);
  const [errorPassword, setPasswordError] = useState(false);
  const [errorRepeatPassword, setRepeatPasswordError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (userFirstName.trim().length < 4) {
        setFirstNameError(true);
      } else {
        setFirstNameError(false);
      }

      if (userLastName.trim().length < 4) {
        setLastNameError(true);
      } else {
        setLastNameError(false);
      }
      // @ts-ignore
      if (userEmail.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      if (userPassword.trim().length < 4) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (userPassword !== userRepeatPassword) {
        setRepeatPasswordError(true);
      } else {
        setRepeatPasswordError(false);
      }
    }, 1000);
    // return clearTimeout(timer);
  }, [
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userRepeatPassword,
  ]);

  const signUpHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(
      utils.authUtils.SignUpUser({
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail,
        password: userPassword,
      })
    );

    dispatch(uiActions.toggleSignUpModal());
  };

  return (
    <Container
      component={'form'}
      maxWidth={'md'}
      sx={{
        zIndex: 1300,
        position: 'fixed',
        top: '30%',
        width: '40vw',
        height: '50vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '6px',
        borderRadius: '10px',
        boxShadow: '0.5rem 0.5rem black, -0.5rem -0.5rem #ccc',
      }}>
      <Typography>Sign up</Typography>
      <TextField
        required
        error={errorFirstName}
        id='outlined-required'
        label='Enter First name'
        onChange={(e) => {
          setUserFirstName(e.target.value);
        }}
      />{' '}
      <TextField
        required
        error={errorLastName}
        id='outlined-required'
        label='Enter Last name'
        onChange={(e) => {
          setUserLastName(e.target.value);
        }}
      />
      <TextField
        required
        error={errorEmail}
        id='outlined-required'
        label='Enter email'
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <TextField
        required
        error={errorPassword}
        id='outlined-required'
        label='Enter password'
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <TextField
        required
        error={errorRepeatPassword}
        id='outlined-required'
        label='Repeat Password'
        onChange={(e) => {
          setUserRepeatPassword(e.target.value);
        }}
      />
      <Button onClick={signUpHandler} type={'submit'}>
        Submit
      </Button>
    </Container>
  );
}

export default SignUp;
