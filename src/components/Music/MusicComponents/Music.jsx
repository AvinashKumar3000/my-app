import React from "react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Album from "./Album";
import PlayList from "./PlayList";
import Songs from "./Songs";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            { children }
          </div>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color:"black"
  },
  tab:{
      width:"33%"
  }
}));
function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tab} label="Post" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Playlist" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Songs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Album/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlayList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Songs/>
      </TabPanel>
      
    </div>
  );
}

const Music = (props) => {
   
    return (
        <div className="main-section">
            <SimpleTabs/>
        </div>
    )
}

export default Music;