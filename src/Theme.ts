import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#7B1984', 
    },
    secondary: {
      main: '#dc004e', // Secondary color (pinkish-red)
    },
    background: {
      default: '#f4f6f8', // Background color (light gray)
      paper: '#ffffff', // Paper background (white)
    },
    text: {
      primary: '#212121', // Primary text color (dark gray)
      secondary: '#757575', // Secondary text color (lighter gray)
    },
    // Use the default colors for custom themes
    error: {
      main: '#f44336', // Error color (red)
    },
    warning: {
      main: '#ff9800', // Warning color (orange)
    },
    info: {
      main: '#2196f3', // Info color (blue)
    },
    success: {
      main: '#4caf50', // Success color (green)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '3rem', // Base size for h1
      '@media (max-width:1280px)': {
        // 1280px is roughly for large screen
        fontSize: '2.5rem',
      },
      '@media (max-width:960px)': {
        // Medium screen
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        // Small screen
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.5rem',
      '@media (max-width:1280px)': {
        fontSize: '2rem',
      },
      '@media (max-width:960px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      '@media (max-width:1280px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      '@media (max-width:1280px)': {
        fontSize: '0.95rem',
      },
      '@media (max-width:960px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      '@media (max-width:1280px)': {
        fontSize: '0.85rem',
      },
      '@media (max-width:960px)': {
        fontSize: '0.8rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
});

export default theme;
