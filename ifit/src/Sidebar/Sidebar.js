import React, { useState } from 'react';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { HomeOutlined, AppstoreOutlined, ShoppingCartOutlined, CreditCardOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons'; // AntD Icons
import './sidebar.css'; // Import custom CSS for responsiveness

function Sidebar() {
  const [active, setActive] = useState(null); // Track the active sidebar item

  // Function to handle click and set the active item
  const handleItemClick = (item) => {
    setActive(active === item ? null : item); // Toggle off if the same item is clicked
  };

  return (
    <Stack spacing={2} className="sidebar-container">
      <Paper className={`sidebar-item ${active === 'home' ? 'active' : ''}`}>
        <Link to="/home" onClick={() => handleItemClick('home')}>
          <HomeOutlined className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'plans' ? 'active' : ''}`}>
        <Link to="/members" onClick={() => handleItemClick('members')}>
          <AppstoreOutlined className="sidebar-icon" />
          <span className="sidebar-text">Members</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'plans' ? 'active' : ''}`}>
        <Link to="/plans" onClick={() => handleItemClick('plans')}>
          <AppstoreOutlined className="sidebar-icon" />
          <span className="sidebar-text">Plans</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'products' ? 'active' : ''}`}>
        <Link to="/products" onClick={() => handleItemClick('products')}>
          <ShoppingCartOutlined className="sidebar-icon" />
          <span className="sidebar-text">My Products</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'payments' ? 'active' : ''}`}>
        <Link to="/payments" onClick={() => handleItemClick('payments')}>
          <CreditCardOutlined className="sidebar-icon" />
          <span className="sidebar-text">Payments</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'analytics' ? 'active' : ''}`}>
        <Link to="/analytics" onClick={() => handleItemClick('analytics')}>
          <BarChartOutlined className="sidebar-icon" />
          <span className="sidebar-text">Analytics</span>
        </Link>
      </Paper>
      <Paper className={`sidebar-item ${active === 'settings' ? 'active' : ''}`}>
        <Link to="/settings" onClick={() => handleItemClick('settings')}>
          <SettingOutlined className="sidebar-icon" />
          <span className="sidebar-text">Settings</span>
        </Link>
      </Paper>
    </Stack>
  );
}

export default Sidebar;
