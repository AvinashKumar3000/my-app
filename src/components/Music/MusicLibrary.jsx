import React from "react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Music from "./MusicComponents/Music";
import PodCast from "./PodCastComponents/PodCast";

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
    backgroundColor: "white",
    color:"black"
  },
  tab:{
      width:"50%"
  }
}));
function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleData = (data) => {
    props.handleData(data);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tab} label="Music" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Podcast" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Music handleData={handleData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PodCast />
      </TabPanel>
    </div>
  );
}

const MusicLibrary = (props) => {
  const handleData = (data) => {
    props.handleData(data)
  }
    return (
        <div className="main-section" style={{backgroundColor:"white"}}>
            <SimpleTabs handleData={handleData}/>
        </div>
    )
}

export default MusicLibrary;