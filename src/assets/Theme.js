'use client';
import { createTheme } from '../node_modules/@mui/material/index.js';

import {
  darkColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../utils/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor.main,
      dark: primaryColor.dark,
    },
    secondary: {
      main: secondaryColor.main,
      dark: secondaryColor.dark,
    },
    white: {
      main: whiteColor.main,
      dark: whiteColor.dark,
    },
    dark: {
      main: darkColor.main,
      dark: darkColor.dark,
    },
  },
  typography: {
    h1: {
      fontSize: 'calc(1.4rem + 1vw)',
      fontWeight: 700,
      fontFamily: ['Gabarito'].join(','),
      '& span': {
        color: primaryColor.dark,
      },
    },
    h2: {
      fontSize: 'calc(1.4rem + 0.6vw)',
      fontWeight: 700,
      fontFamily: ['Gabarito'].join(','),
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      '& span': {
        color: primaryColor.main,
      },
      fontFamily: ['Gabarito'].join(','),
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      '& span': {
        color: primaryColor.main,
      },
      fontFamily: ['Gabarito'].join(','),
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: 5,
      fontFamily: ['Gabarito'].join(','),
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontFamily: ['Gabarito'].join(','),
    },
    p: {
      fontSize: 14,
      fontFamily: ['Montserrat'].join(','),
      fontWeight: 500,
    },
    b: {
      fontSize: 15,
      fontFamily: ['Montserrat'].join(','),
      fontWeight: 700,
    },
    small: {
      fontSize: 12,
      fontFamily: ['Montserrat'].join(','),
    },
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
