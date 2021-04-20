import { Avatar, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ArrowBack, Send } from '@material-ui/icons';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChatSystem.css'

const options = [
    'None',
    'Atria',
    'Callisto'
];

const ITEM_HEIGHT = 40;

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


const myStyle = makeStyles({
    root: {
        padding: "0px",
        backgroundColor: '#E5DED5'
    },
    header: {
        backgroundColor: "#E4E5E3",
        height: "80px",
        width: "100%",
        padding: "10px",
        position: "fixed",
    },
    back: {
        padding: "17px",
        paddingLeft: "10px",
    },
    name: {
        color: 'black',
        padding: "17px",
        paddingLeft: "25px"
    },
    img: {
        paddingTop: "10px"
    },
    chatArea: {
        height: "81vh",
        overflow: 'auto',
        padding: "20px",
        paddingTop: "100px",
        paddingBottom: '1+0px',
        backgroundColor: "#E5DED5"
    },
    chatInput: {
        position: 'fixed',
        zIndex: 1,
        color: 'white',
        backgroundColor: '#E5DED5',
    },
    sendSection: {
        padding: "20px",
        paddingLeft: "2px",
    },
    input:{
        backgroundColor:'white'
    }
})

const ChatSystem = (props) => {
    const classes = myStyle()
    return (
        <Container className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={2} className={classes.back}>
                    <ArrowBack style={{ color: "black" }} />
                </Grid>
                <Grid item xs={1} className={classes.img}>
                    <Avatar>
                        <img src="#" />
                    </Avatar>
                </Grid>
                <Grid item xs={7} className={classes.name}>
                    <Typography>
                        name
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <LongMenu />
                </Grid>
            </Grid>
            <Container className={classes.chatArea}>
                <div className="grp-left-cc">
                    <div className="by">
                        kamaraj
                    </div>
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="grp-left-cc">
                    <div className="by">
                        kamaraj
                    </div>
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="grp-left-cc">
                    <div className="by">
                        kamaraj
                    </div>
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="grp-left-cc">
                    <div className="by">
                        kamaraj
                    </div>
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="right-cc">
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="left-cc">
                    hai this message is sent from the name user.
                    Thank you for this wonder full message
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="right-cc">
                    I had recieved the messsage. thanks for the
                    message.
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
                <div className="left-cc">
                    hai this message is sent from the name user.
                    Thank you for this wonder full message
                    <div className="time">
                        11:30 AM
                    </div>
                </div>
            </Container>
            <Grid container className={classes.chatInput}>
                <Grid item xs={10} className={classes.back}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        className={classes.input}
                    />
                </Grid>
                <Grid item xs={2} className={classes.sendSection}>
                    <IconButton 
                        aria-label="send"
                    >
                        <Send />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChatSystem;