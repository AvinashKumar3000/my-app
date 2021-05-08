import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';
import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import MainMusicPlayer from './MainMusicPlayer';

const miniPlayerStyles = makeStyles({
    miniPlayerRoot: {
        color: "white",
        backgroundColor: 'black',
        width: "100%",
        height: "60px",
        padding: '0px',
        borderTop: '2px solid gray'
    },
    img: {
        height: "100%",
        width: "100%",
    },
    details: {
        padding: "5px",
        paddingLeft: "13px"
    },
    songArtist: {
        color: "gray"
    },
    icon: {
        padding: '15px'
    }
})

const MiniPlayer = (props) => {
    const classes = miniPlayerStyles()
    return (
        <Container className={classes.miniPlayerRoot} onClick={props.changeShow}>
            <Grid container style={{ height: '100%', width: "100%" }}>
                <Grid item xs={2} className={classes.img}>
                    <img style={{height:"55px",width:"55px"}} src={props.songData.cover} alt="d" />
                </Grid>
                <Grid item xs={8} className={classes.details}>
                    <Typography >
                        <div>
                            {props.songData.name}
                        </div>
                        <div className={classes.songArtist}>
                            {props.songData.artists}
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classes.icon}>
                    <PlayCircleOutline></PlayCircleOutline>
                </Grid>
            </Grid>
        </Container>
    )
}


const MusicPlayer = forwardRef((props,ref) => {
    const [show, setshow] = useState(false)
    const [songRange, setsongRange] = useState([])
    const [play_idx, setplay_idx] = useState(11)
    const [songData, setsongData] = useState({})

    useImperativeHandle(ref, () => ({
        setValues (arg1,arg2) {
            setsongRange(arg1)
            setplay_idx(arg1.indexOf(arg2))
            console.log("performing search in : "+ arg1.indexOf(arg2))
            getMusic()
        }
      }));
    
   
    const getMusic = () => {
        fetch("http://13.232.66.207:8080/Songs/getSongs/"+songRange[play_idx])
          .then(response => response.json())
          .then(result => {
            console.log(result);
            setsongData(result);
          })
          .catch(error => console.log('error', error));
    }

    const changeShow = (e) => {
        console.log("clicked")
        e.preventDefault();
        setshow(!show);
    }
    const nextSong = () => {
        setplay_idx( ( play_idx + 1 ) % songRange.length )
        getMusic();
        console.log("next song is clicked")
    }
    const prevSong = () => {
        setplay_idx((play_idx == 0 )? songRange.length - 1 : play_idx - 1 )
        getMusic();
        console.log("prev song is clicked")
    }
    return (
        <div>
            <div style={(!show)?{display:"block"}:{display:"none"}} >     
                <MiniPlayer songData={songData} changeShow={changeShow} />
            </div>
            <div style={(show)?{display:"block"}:{display:"none"}}>     
                <MainMusicPlayer songData={songData} nextSong={nextSong} prevSong={prevSong} changeShow={changeShow}/>
            </div>
        </div>
    )
})
export default MusicPlayer;