import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // to utilize all css classes of bootstrap
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue primary color
    },
    secondary: {
      main: '#f48fb1', // Pink secondary color
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Darker paper background
    },
    text: {
      primary: '#ffffff', // White text color
      secondary: '#b0bec5', // Gray text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font for your app
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


