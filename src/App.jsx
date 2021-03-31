import React,{ useState } from 'react';

import MusicLibrary from "./components/Music/MusicLibrary";
import Chat from './components/Chat';
import Status from './components/Status';
import Manage from './components/Manage';

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faComment, faCircleNotch, faCog } from '@fortawesome/free-solid-svg-icons'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
const useStyles = makeStyles({
  root: {
    width: "100vw",
    paddingBottom:"1px"
  },
});

const TabView = (props) => {
  const { value } = props
  
  if ( value === "music" ) {
    return ( <MusicLibrary/> )
  }else if ( value === "chat" ){
    return ( <Chat/> )
  }else if ( value === "status" ){
    return ( <Status/> )
  }
  return ( <Manage/> )
}

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('music');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <TabView value={value}/>
      <div className="bottom-navigation">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction 
            label="music" 
            value="music" 
            icon={
              <FontAwesomeIcon icon={faMusic} size="lg"/>
            } 
          />
          <BottomNavigationAction 
            label="chat" 
            value="chat" 
            icon={
              <FontAwesomeIcon icon={faComment} size="lg"/>
            } 
          />
          <BottomNavigationAction 
            label="status" 
            value="status" 
            icon={
              <FontAwesomeIcon icon={faCircleNotch} size="lg"/>
            } 
          />
          <BottomNavigationAction 
            label="manage" 
            value="manage" 
            icon={
              <FontAwesomeIcon icon={faCog} size="lg"/>
            } 
          />
      </BottomNavigation>
      </div>
    </div>
  );
}

export default App;