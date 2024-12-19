import React, { useState } from 'react';
import './header.css';
import { Paper, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const userDetails = useSelector((state => state.app));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        console.log('Profile Clicked');
        handleMenuClose();
    };

    const handleLogout = () => {
        console.log('Logout Clicked');
        console.log(localStorage.getItem('IFlexToken'))
        localStorage.clear('IFlexToken')
        window.location.reload();
        handleMenuClose();
    };

    return (
        <Paper style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="mainlogo">
                <div className="logo-container">
                    <div className="icon">💪</div> &nbsp;
                    <div className="logo-title">FlexFit</div>
                    <div className="logo-subtitle">Manager</div>
                </div>
            </div>
            <div>
                <IconButton onClick={handleMenuOpen}>
                    <Avatar alt="User Avatar" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </Paper>
    );
}

export default Header;
