import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { deepPurple } from '@mui/material/colors';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(
    null
  );

  // Open menu
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: 'white',
        p: 0,
        margin: '0 !important',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
        }}
      >
        <Typography
          variant='h6'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src='/loginImg/logo.svg'
            alt='TaskBuddy'
            style={{ height: '40px' }}
          />
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={handleMenuOpen}
            sx={{ marginRight: 2 }}
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>{' '}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
