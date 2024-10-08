import React from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Plans from '../Pages/Plans/Plans';
import Settings from '../Pages/Settings/Settings';
import Analytics from '../Pages/Analytics/Analytics';
import Products from '../Pages/Products/Products';
import Payments from '../Pages/Payments/Payments';
function MainComponent() {
  return (
<Grid item xs={8.5}>

<div style={{width:"auto"}}>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/products" element={<Products />} />
      </Routes>
</div>

  
</Grid>
  )
}

export default MainComponent;