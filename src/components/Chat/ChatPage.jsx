import React, { useState } from "react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "./ChatComponents/Chat";
import ChatSystem from "./ChatComponents/ChatSystem";

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
      width:"50%"
  }
}));
function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tab} label="Chat" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Chat showChat={props.showChat}/>
      </TabPanel>
    </div>
  );
}

const ChatPage = (props) => {
    const [show, setshow] = useState(false)
    const [employeeData, setemployeeData] = useState(null)
    const [type, settype] = useState("ind")
    const showChat = (ele) => {
      setemployeeData(ele);
      if(ele.type == "grp") {
        settype("grp")
      }else{
        settype("ind")
      }
      setshow(!show)
    }
    return (
        <div className="main-section">
            { show ? <ChatSystem  showChat={showChat} employeeData={employeeData} chatType={type}/> : <SimpleTabs showChat={showChat}/> }
        </div>
    )
}

export default ChatPage;