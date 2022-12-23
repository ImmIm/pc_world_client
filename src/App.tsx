import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MainHeader from './components/Header/MainHeader/MainHeader';
import { useAppSelector } from './app/hooks';
import Login from './components/auth/Login';
import AppBackdrop from './components/ui/AppBackdrop';
import { Outlet } from "react-router-dom";

function App() {
  const loginedBackdrop = useAppSelector((state) => state.ui.loginBackdrop);

  return (
    <div className='App'>
      {ReactDOM.createPortal(
        <>{loginedBackdrop ? <Login /> : null}</>,
        document.getElementById('modal-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <AppBackdrop></AppBackdrop>,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default App;
