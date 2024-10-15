import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import { Paper, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import MainComponent from './Main/Main';

import { useDispatch, useSelector } from 'react-redux';
import Home from './Pages/Home/Home';
import Plans from './Pages/Plans/Plans';

function App() {

  const theme = useSelector((state) => state.app.theme);
  return (
    <div>
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>


        <Grid container item xs={12} spacing={1}>
          <Grid item xs={3.5}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
{theme}
              <Sidebar />

            </Paper>
          </Grid>
          <MainComponent>
        

          </MainComponent>
        </Grid>

      </Grid>
      
    </Box>

    </div>



  );
}

export default App;
