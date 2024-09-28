import React from 'react';
import { Paper, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import MainComponent from './Main/Main';

function App() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>


        <Grid container item xs={12} spacing={1}>
          <Grid item xs={3.5}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>

              <Sidebar />

            </Paper>
          </Grid>
          <MainComponent />
        </Grid>

      </Grid>
    </Box>
  );
}

export default App;
