import React, { useState } from 'react';
import { Box, Grid, IconButton, Drawer, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import MainComponent from './Main/Main';
import Login from './Pages/Login';
import browserService from './Services/browserService';

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.app.user) || browserService.getCookies('IFlexToken');
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  console.log('User----', user)

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          {isSmallScreen ? (
            <>
              <IconButton onClick={toggleSidebar} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1200 }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
                <Sidebar />
              </Drawer>
            </>
          ) : (
            <Grid item xs={3.5}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Sidebar />
              </Paper>
            </Grid>
          )}
          <Grid className='main' container item xs={isSmallScreen ? 12 : 8.5} >
            {user ? <MainComponent /> :
              <Login />
            }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;
