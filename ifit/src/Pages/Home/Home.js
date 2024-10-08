import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'; // Corrected import
import PostsIcon from '@mui/icons-material/Article';
import EventsIcon from '@mui/icons-material/Event';
import GalleryIcon from '@mui/icons-material/PhotoLibrary';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
  // Use media query for responsiveness
  const isMobile = useMediaQuery('(max-width:450px)'); // Detects screen width less than 200px

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 'auto' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          orientation={isMobile ? "vertical" : "horizontal"} // Switch to vertical when screen width is less than 200px
          aria-label="full width tabs example"
        >
          <Tab icon={<PostsIcon />} label={!isMobile ? "Posts" : null} {...a11yProps(0)} />
          <Tab icon={<EventsIcon />} label={!isMobile ? "Events" : null} {...a11yProps(1)} />
          <Tab icon={<GalleryIcon />} label={!isMobile ? "Gallery" : null} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Posts
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Events
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Gallery
      </TabPanel>
    </Box>
  );
}

function Home() {
  return (
    <div className="homepage">
      <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: 'none' }}>
        <FullWidthTabs className="Hometabs" />
      </Paper>
    </div>
  );
}

export default Home;
