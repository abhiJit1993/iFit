import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectItem } from '../redux/reducers/mainReducer';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      <ul>
        <li onClick={() => dispatch(selectItem('home'))}>Home</li>
        <li onClick={() => dispatch(selectItem('about'))}>About</li>
        <li onClick={() => dispatch(selectItem('contact'))}>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
