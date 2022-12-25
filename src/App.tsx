import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MainHeader from './components/Header/MainHeader/MainHeader';
import { useAppSelector, useAppDispatch } from './app/hooks';
import Login from './components/auth/Login';
import AppBackdrop from './components/ui/AppBackdrop';
import { Outlet } from 'react-router-dom';
import { loginUserAutomatic } from './app/utils';
import Swal from 'sweetalert2';
import SignUp from './components/auth/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  const loginedBackdrop = useAppSelector((state) => state.ui.loginModal);
  const signUpBackdrop = useAppSelector((state) => state.ui.signUpModal);
  const loginError = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();
  const isLoggined = useAppSelector((state) => state.auth.isLogined);
  
  useEffect(() => {
    dispatch(loginUserAutomatic());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggined === true) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You succesfuly logined',
        showConfirmButton: false,
        timer: 700,
      });
    }
  }, [isLoggined]);

  useEffect(() => {
    if (loginError !== '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: loginError,
      });
    }
  }, [loginError]);

  return (
    <div className='App' style={{height: '100vh', display: 'flex',  flexDirection: 'column', justifyContent: 'space-between'}}>
      {ReactDOM.createPortal(
        <>{loginedBackdrop ? <Login /> : null}</>,
        document.getElementById('modal-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <>{signUpBackdrop ? <SignUp /> : null}</>,
        document.getElementById('modal-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <AppBackdrop></AppBackdrop>,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
