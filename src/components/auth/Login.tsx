import { Button, TextField } from '@mui/material'
import { Container } from '@mui/system'

import { loginUser, uiActions } from '../../app/store'
import { useState } from 'react'
import { useAppDispatch} from '../../app/hooks'
import Typography from '@mui/material/Typography'


function Login() {
  const dispatch = useAppDispatch()
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState(false);


  const loginHandler = (e : React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()

    if (userName.trim().length > 0 && userPassword.trim().length){
      setError(false)
      dispatch(loginUser({email: userName, password: userPassword}))
      dispatch(uiActions.toggleLoginModal())
    }else{
      setError(true)
    }
  }

  return (
    <Container component={'form'} maxWidth={'md'} sx={{zIndex: 1300,  position: 'fixed',top: '30%',  width: '20%', height: '20%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '6px',borderRadius: '10px', boxShadow:  '0.5rem 0.5rem black, -0.5rem -0.5rem #ccc'}}>
    <Typography>Login</Typography>
    <TextField
          required
          error={error}
          id="outlined-required"
          label="Enter name"
          onChange={(e) => {setUserName(e.target.value)}}
        />
            <TextField
          required
          error={error}
          id="outlined-required"
          label="Enter Password"
          onChange={(e) => {setUserPassword(e.target.value)}}
        />
        <Button onClick={loginHandler} type={'submit'}>Submit</Button>
    </Container>
  )
}

export default Login