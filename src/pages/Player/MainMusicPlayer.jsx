import { Container, makeStyles, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FavoriteBorderOutlined } from '@material-ui/icons';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const ITEM_HEIGHT = 40;

function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setoptions] = useState([])

  const open = Boolean(anchorEl);

  useEffect(() => {
      fetch("https://springboot-lemon.herokuapp.com/playlist/" + localStorage.getItem("employeeId"))
          .then(response => response.json())
          .then(result => {
              setoptions(result)
          })
          .catch(error => console.log('error', error));
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 const btnHandle = (data) => {
    
    var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(
                {
                  "songId": props.songId,
                  "playlistId": data.id 
                });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://springboot-lemon.herokuapp.com/playlistsongs", requestOptions)
                .then(response => response.text())
                .then(result => {
                    window.alert("created sucess")
                    console.log(result)
                })
                .catch(error => console.log('error', error));
 }
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
          <MenuItem key={option.name} selected={option === 'Pyxis'} onClick={handleClose}>
            <div onClick={ (e) => {
                e.preventDefault();
                btnHandle(option)
            }}>
              {"Add to " + option.name}
            </div>
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
  },
  btnPart: {
    width:"100%",
    display:'flex',
    flexDirection:"row"
  },
  btn:{
    width:"40vw",
    margin:"10px",
    padding:"10px",
    float:"left",
    textAlign:'center',
    backgroundColor:"black",
    color:'white'
  }
})
const MainMusicPlayer = (props) => {
  const stepForward = (e) => {
    e.preventDefault();
    props.nextSong();
  }
  const stepBackward = (e) => {
    e.preventDefault();
    props.prevSong();
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
          <LongMenu songId={props.songData.id}/>
        </Grid>
      </Grid>
      <Container className={classes.imgContainer}>
        <img src={props.songData.cover} alt="" className={classes.img} />
      </Container>
      <Grid container className={classes.section3}>
        <Grid item xs={10}>
          <div className={classes.songName}>
            <marquee scrolldelay={120}><span class="marquee">{props.songData.name}</span></marquee>
          </div>
          <div className={classes.artistName}>
            {props.songData.artists}
            <p>
              {props.songData.releases}
              {props.songData.genere}
            </p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <FavoriteBorderOutlined />
        </Grid>
      </Grid>
      <AudioPlayer
        autoPlay
        src={props.songData.url}
        // onPlay={e => console.log("onPlay")}
        onEnded={stepForward}
        // other props here
      />
      <div className={classes.btnpart}>
        <button className={classes.btn} onClick={stepBackward} >
          prev
        </button>
        <button className={classes.btn} onClick={stepForward}>
           next
          </button>
        </div>
    </Container>
  )
}

export default MainMusicPlayer