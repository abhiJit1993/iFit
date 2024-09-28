import React from 'react';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';

function Sidebar() {
  return (
    

<Stack spacing={2}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Home</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>My Members</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>My Products</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Membership Plans</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Overdue Payments</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Analytics</Paper>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>Settings</Paper>
</Stack>

           
  );
}

export default Sidebar;
