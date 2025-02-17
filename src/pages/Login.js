import React from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  logoutUser,
} from '../Redux/features/authSlice';
import { Button, Container, Typography } from '@mui/material';

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
    <Container>
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
    </Container>
  );
};

export default Login;
