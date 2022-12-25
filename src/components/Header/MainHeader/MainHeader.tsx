import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authActions, uiActions } from '../../../app/store';
import { Link } from 'react-router-dom';
import { Divider, ListItemIcon } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { UserInfo } from '../../../types/types';
import StatusBar from '../StatusBar/StatusBar';
import CategoriesPicker from '../../Homepage/CategoriesPicker';

function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const dispatch = useAppDispatch();
  const logined = useAppSelector((state) => state.auth.isLogined);
  const userInfo: UserInfo = useAppSelector((state) => state.auth.currentUser);
  const userPicture = useAppSelector((state) => state.auth.userPicture);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loginHandler = () => {
    handleCloseUserMenu();
    dispatch(uiActions.toggleLoginModal());
  };

  const signUpHandler = () => {
    handleCloseUserMenu();
    dispatch(uiActions.toggleSignUpModal());
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
    handleCloseUserMenu();
  };

  const settings: Array<React.ReactElement> = [
    <MenuItem key={'profile'}>
      <NavLink
        to={'/profile'}
        end
        style={{
          textAlign: 'center',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '7px',
        }}>
        <Avatar src={userPicture} />
        {/* 
        //@ts-ignore*/}
        {userInfo === null? <Typography>Profile</Typography> : <Typography>{userInfo.first_name}</Typography> }
      </NavLink>
    </MenuItem>,
    <Divider key={'divider'} />,
    <MenuItem key={'settings'}>
      <Link
        to={'/profile/settings'}
        style={{ textAlign: 'center', textDecoration: 'none' }}>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Settings
      </Link>
    </MenuItem>,
    <MenuItem onClick={logoutHandler} key={'logout'}>
      <ListItemIcon>
        <Logout fontSize='small' />
      </ListItemIcon>
      Logout
    </MenuItem>,
  ];

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: 'transparent', border: '0px', boxShadow: 'none' }}>
        
      <Container maxWidth='xl' disableGutters >
      <StatusBar />
        {/* Desctop */}
        <Toolbar  sx={{ backgroundColor: 'grey'}}>
          <LaptopChromebookIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <NavLink
            to={'/'}
            end
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              PC World
            </Typography>
          </NavLink>
          <Search sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* Moble */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              <MenuItem>
                <Typography textAlign='center'>
                  <NavLink
                    to={'/Categories'}
                    end
                    style={{ textDecoration: 'none', color: 'black' }}>
                    Categories
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign='center'>
                  <NavLink
                    to={'/Products'}
                    end
                    style={{ textDecoration: 'none', color: 'black' }}>
                    Products
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <LaptopChromebookIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            PC World
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          {logined ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='User' src={userPicture} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => setting)}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: 'flex' }}>
              <Button
                sx={{ color: 'white', display: 'block' }}
                onClick={signUpHandler}>
                Sign up
              </Button>

              <Button
                sx={{ color: 'white', display: 'block' }}
                onClick={loginHandler}>
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
        <Container  
        disableGutters
        maxWidth={'xl'}
        sx={{
        maxHeight: '100px',
        border: '1px sold grey',
        backgroundColor: 'silver'
      }}>
        <CategoriesPicker />
        </Container>
      </Container>
      
    </AppBar>
  );
}
export default MainHeader;
