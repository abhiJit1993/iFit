import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostsIcon from '@mui/icons-material/Article';
import EventsIcon from '@mui/icons-material/Event';
import GalleryIcon from '@mui/icons-material/PhotoLibrary';
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageIcon from '@mui/icons-material/Image';

import IFitImageList from '../../Utility Components/imageList';

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
          <Typography component="div">{children}</Typography>
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
  const [nestedValue, setNestedValue] = React.useState(0); // Use separate state for nested tabs

  const isMobile = useMediaQuery('(max-width:450px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNestedChange = (event, newValue) => {
    setNestedValue(newValue);
  };

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 'auto' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          orientation={isMobile ? 'vertical' : 'horizontal'}
          aria-label="full width tabs example"
        >
          <Tab icon={<PostsIcon />} label={!isMobile ? 'Posts' : null} {...a11yProps(0)} />
          <Tab icon={<EventsIcon />} label={!isMobile ? 'Events' : null} {...a11yProps(1)} />
          <Tab icon={<GalleryIcon />} label={!isMobile ? 'Gallery' : null} {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Render posts panel */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        Posts
      </TabPanel>

      {/* Render events panel */}
      <TabPanel value={value} index={1} dir={theme.direction}>
        Events
      </TabPanel>

      {/* Gallery with nested tabs */}
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box sx={{ bgcolor: 'background.paper', width: 'auto' }}>
          <AppBar position="static">
            <Tabs
              value={nestedValue} // Controlled nested tabs
              onChange={handleNestedChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              orientation={isMobile ? 'vertical' : 'horizontal'}
              aria-label="nested tabs example"
            >
              <Tab icon={<ImageIcon />} label={!isMobile ? 'Images' : null} {...a11yProps(3)} />
              <Tab icon={<VideocamIcon />} label={!isMobile ? 'Videos' : null} {...a11yProps(4)} />
            </Tabs>
          </AppBar>

          {/* Conditionally render the image list only when "Images" tab is active */}
          <TabPanel value={nestedValue} index={0} dir={theme.direction}>
            <IFitImageList itemList={itemData} />
          </TabPanel>

          {/* Conditionally render the video section only when "Videos" tab is active */}
          <TabPanel value={nestedValue} index={1} dir={theme.direction}>
            Videos
          </TabPanel>
        </Box>
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
