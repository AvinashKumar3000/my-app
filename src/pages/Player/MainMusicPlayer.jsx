import { Container, makeStyles, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FavoriteBorderOutlined } from '@material-ui/icons';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const options = [
  'None',
  'Atria',
  'Callisto'
];

const ITEM_HEIGHT = 18;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon color="white" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const myStles = makeStyles({
  root: {
    backgroundColor: 'white',
    color: "black",
    zIndex: "5",
    height: '100vh',
    position: "fixed",
    top: "0",
    padding: "10px"
  },
  expand: {
    padding: "3vw",
    paddingLeft: "20px"
  },
  albumName: {
    padding: "3vw",
    textAlign: "center"
  },
  img: {
    width: '200px',
    height: "200px",
    backgroundColor: "gray",
  },
  imgContainer: {
    width: '100%',
    padding: "20vw",
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  section3: {
    padding: "20px",
  },
  artistName: {
    padding: '2px',
    color: "gray",
  }
})
const MainMusicPlayer = (props) => {
  const {musicId, setmusicId} = props
  const [musicData, setmusicData] = useState({})
  
  const stepForward = (e) => {
    e.preventDefault();
    setmusicId(musicId+1);
  }
  const classes = myStles();
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={2} className={classes.expand}>
          <ExpandMoreIcon onClick={props.changeShow} />
        </Grid>
        <Grid item xs={8} className={classes.albumName}>
          album name
                </Grid>
        <Grid item xs={2}>
          <LongMenu />
        </Grid>
      </Grid>
      <Container className={classes.imgContainer}>
        <img src={musicData.cover} alt="" className={classes.img} />
      </Container>
      <Grid container className={classes.section3}>
        <Grid item xs={10}>
          <div className={classes.songName}>
            <marquee scrolldelay={120}><span class="marquee">{musicData.name}</span></marquee>
          </div>
          <div className={classes.artistName}>
            {musicData.artists}
            <p>
              {musicData.releases}
              {musicData.genere}
            </p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <FavoriteBorderOutlined />
        </Grid>
      </Grid>
      <AudioPlayer
        autoPlay
        src={musicData.url}
        // onPlay={e => console.log("onPlay")}
        onEnded={stepForward}
        // other props here
      />
    </Container>
  )
}

export default MainMusicPlayer