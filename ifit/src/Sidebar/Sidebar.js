import React from 'react';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { HomeOutlined, AppstoreOutlined, ShoppingCartOutlined, CreditCardOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons'; // AntD Icons
import './sidebar.css'; // Import custom CSS for responsiveness

function Sidebar() {
  return (
    <Stack spacing={2} className="sidebar-container">
      <Paper className="sidebar-item">
        <Link to="/home">
          <HomeOutlined className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </Link>
      </Paper>
      <Paper className="sidebar-item">
        <Link to="/plans">
          <AppstoreOutlined className="sidebar-icon" />
          <span className="sidebar-text">Plans</span>
        </Link>
      </Paper>
      <Paper className="sidebar-item">
        <Link to="/products">
          <ShoppingCartOutlined className="sidebar-icon" />
          <span className="sidebar-text">My Products</span>
        </Link>
      </Paper>
      <Paper className="sidebar-item">
        <Link to="/payments">
          <CreditCardOutlined className="sidebar-icon" />
          <span className="sidebar-text">Payments</span>
        </Link>
      </Paper>
      <Paper className="sidebar-item">
        <Link to="/analytics">
          <BarChartOutlined className="sidebar-icon" />
          <span className="sidebar-text">Analytics</span>
        </Link>
      </Paper>
      <Paper className="sidebar-item">
        <Link to="/settings">
          <SettingOutlined className="sidebar-icon" />
          <span className="sidebar-text">Settings</span>
        </Link>
      </Paper>
    </Stack>
  );
}

export default Sidebar;
