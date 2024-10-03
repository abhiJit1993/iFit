import React from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Plans from '../Pages/Plans/Plans';
function MainComponent() {
  return (
<Grid item xs={8.5}>

<div style={{width:"auto"}}>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
</div>

  
</Grid>
  )
}

export default MainComponent;