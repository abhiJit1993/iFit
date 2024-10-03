import React from 'react';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar() {
  return (
    

<Stack spacing={2}>
            <Paper style={{ padding: '20px', textAlign: 'center' }} > <Link to="/home">Home</Link></Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}> <Link to="/plans">Plans</Link></Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>My Products</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Membership Plans</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Overdue Payments</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Analytics</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Settings</Paper>
</Stack>

           
  );
}

export default Sidebar;
