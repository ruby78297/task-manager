import React from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  setUser,
  logoutUser,
} from '../Redux/features/authSlice';
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import theme from '../Theme';
import { RootState } from '../Redux/store'; // Adjust the import if the store is in a different file

// Define the type for the user from Firebase
interface User {
  displayName: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.auth.user
  );

  const handleLogin = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // dispatch(setUser(result.user));
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleLogout = async (): Promise<void> => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
        overflow: 'auto',
        width: '100%',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Stack alignItems={'start'} mx={10}>
            <Stack
              direction={'row'}
              alignItems={'start'}
              justifyContent={'center'}
            >
              <Box>
                <img
                  src='/loginImg/taskIcon.svg'
                  alt='icn'
                  style={{ paddingTop: 7 }}
                />
              </Box>
              <Box>
                <Typography
                  variant='h4'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  TaskBuddy
                </Typography>
              </Box>
            </Stack>

            <Typography
              mb={3}
              mt={1}
              textAlign={'start'}
              width={'80%'}
            >
              Streamline your workflow and track progress
              effortlessly with our all-in-one task management
              app.
            </Typography>

            {user ? (
              <>
                {/* <Typography variant='h6'>
                  Welcome, {user.displayName}
                </Typography> */}
                <Button
                  variant='contained'
                  onClick={handleLogout}
                  sx={{
                    marginTop: '10px',
                    backgroundColor: theme.palette.primary.dark,
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#292929',
                  borderRadius: '1rem',
                }}
                onClick={handleLogin}
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  spacing={1}
                  sx={{ px: 10, borderRadius: '2rem' }}
                >
                  <Box>
                    <img
                      src='/loginImg/google.svg'
                      alt='icn'
                      style={{ paddingTop: 7 }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ textTransform: 'none' }}>
                      Continue with Google
                    </Typography>
                  </Box>
                </Stack>
              </Button>
            )}
          </Stack>
        </Grid>

        {/* Top Image overlay */}
        <Grid item xs={12} sm={7}>
          <Grid
            container
            spacing={2}
            justifyContent={'center'}
            alignContent={'center'}
            sx={{
              position: 'relative',
              height: '100%',
            }}
          >
            {/* Image grid container for overlapping images */}
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100vh',
                  overflow: 'hidden',
                }}
              >
                <img
                  src='/loginImg/circles_bg.png'
                  alt='background'
                  style={{
                    width: '100%',
                    height: '100%',
                    paddingTop: '5%',
                    objectFit: 'contain',
                  }}
                />

                <img
                  src='/loginImg/loginImg.png'
                  alt='login'
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-20%, -45%)',
                    maxWidth: '100%',
                    height: '70%',
                    width: '70%',
                    borderRadius: '2rem',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
