import React from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  logoutUser,
} from '../Redux/features/authSlice';
import {
  Box,
  Button,
  Container,
  Grid2,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(setUser(result.user));
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <Container
      maxWidth='false'
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Box>
            <Typography variant='h4'>Task Manager</Typography>
            {user ? (
              <>
                <Typography variant='h6'>
                  Welcome, {user.displayName}
                </Typography>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleLogout}
                  sx={{ marginTop: '10px' }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant='contained'
                color='primary'
                onClick={handleLogin}
              >
                Sign in with Google
              </Button>
            )}
          </Box>
        </Grid>
        {/* Top Image overlay */}
        <Grid xs={12} sm={6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '50%', // Top half of the screen
                backgroundImage: 'url(/loginImg/circles_bg.png)', // First image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1, // Ensure it's in the background
              }}
            ></Grid>

            {/* Bottom Image overlay */}
            <Grid
              item
              xs={12}
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50%',
                height: '50%', // Bottom half of the screen
                backgroundImage: 'url(/loginImg/loginImg.png)', // Second image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1, // Ensure it's in the background
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
