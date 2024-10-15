import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // to utilize all css classes of bootstrap
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from './Store/store'

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
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <Provider store={store}>

    <App/>
    </Provider>
 
    </ThemeProvider>
  </BrowserRouter>
  
    
);


