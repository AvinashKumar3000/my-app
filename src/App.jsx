import React from 'react';

import MusicLibrary from "./components/Music/MusicLibrary";
import ChatPage from './components/Chat/ChatPage';
import StatusPage from './components/Status/StatusPage';
import ManagePage from './components/Manage/ManagePage'

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faComment, faCircleNotch, faCog } from '@fortawesome/free-solid-svg-icons'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MusicPlayer from './pages/Player/MusicPlayer';

const useStyles = makeStyles({
  root: {
    width: "100vw",
    paddingBottom:"1px"
  },
  musicPlayer:{
    color:"black",
    bacgroundColor:'white'
  }
});

const TabView = (props) => {
  const { value } = props
  
  if ( value === "music" ) {
    return ( <MusicLibrary/> )
  }else if ( value === "chat" ){
    return ( <ChatPage/>)
  }else if ( value === "status" ){
    return ( <StatusPage/> )
  }
  return ( <ManagePage/> )
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

        <div className={classes.musicPlayer}>
          <MusicPlayer/>
        </div>
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