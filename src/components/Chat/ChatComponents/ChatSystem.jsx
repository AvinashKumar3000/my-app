import { Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ArrowBack, Send } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChatSystem.css'
import firestore from './firebase';



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
        backgroundColor: '#E5DED5',
        position: "relative",
        zIndex: "20",
        height: "100vh"
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
        paddingTop: "18px",
        color: "black"
    },
    chatArea: {
        height: "86vh",
        overflow: 'auto',
        padding: "20px",
        paddingTop: "100px",
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
    input: {
        backgroundColor: 'white'
    }
})

const ChatSystem = (props) => {
    const chatId = (props.chatType === "grp")? "53" : ""+(props.employeeData.id + parseInt(localStorage.getItem("employeeId")));
    const obj = {}
    obj[chatId] = []
    const classes = myStyle()
    const [items, setitems] = useState({chats:[]})
    const [msg, setmsg] = useState("")


    useEffect(() => {
        firestore.collection("chatsystem").onSnapshot(() => {
            console.log("there is some update...")
            load();
        });
    }, [])

    const load = async () => {
        var ref = await firestore.collection("chatsystem")
            .doc(chatId).get().then(function (docs) {
                console.log(docs.data())
                if (docs.data() === undefined) {
                    setitems({chats:[]})
                    console.log(items)
                } else {
                    setitems(docs.data())
                }
                document.getElementById("scrolldown").scrollIntoView();
            })
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        if (msg !== "") {
            var ref = await firestore.collection("chatsystem")
            ref.doc(chatId).set({
                chats: [
                    ...items.chats,
                    {
                        name: localStorage.getItem("employeeName"),
                        msg: msg,
                        time: new Date()
                    }
                ]
            })
            setmsg("")
            load();
        } else {
            // make msg down
        }
    }
    return (
        <Container className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={2} className={classes.back}>
                    <ArrowBack style={{ color: "black" }} onClick={
                        (e) => {
                            e.preventDefault();
                            props.showChat(0);
                        }
                    } />
                </Grid>
                <Grid item xs={1} className={classes.img}>
                    <Typography>
                        {props.employeeData.id}
                    </Typography>
                </Grid>
                <Grid item xs={7} className={classes.name}>
                    <Typography>
                    {props.employeeData.name}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <LongMenu />
                </Grid>
            </Grid>
            <Container className={classes.chatArea}>
                {
                    (items.chats.length !== 0) ? (
                        items.chats.map((item, idx) => {
                            return (
                                <div 
                                className={ 
                                    ( localStorage.getItem("employeeName") !== item.name ) ?"grp-left-cc" :
                                    "right-cc"
                                    } 
                                    id={"chat-" + idx}>
                                    <div className="by">
                                        {item.name}
                                    </div>
                                    {item.msg}
                                    <div className="time">
                                        {new Date(item.time.seconds).toDateString() + " | " + new Date(item.time.seconds).toTimeString().substring(0, 8)}
                                    </div>
                                </div>
                            )
                        })
                    ) : ""
                }
                <div id="scrolldown" style={{float:'left',width:'100%'}}> 
                                   
                </div>
            </Container>
            <Grid container className={classes.chatInput}>
                <Grid item xs={10} className={classes.back}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        className={classes.input}
                        value={msg}
                        onChange={(e) => {
                            setmsg(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={2} className={classes.sendSection}>
                    <IconButton
                        aria-label="send"
                    >
                        <Send onClick={sendMessage} />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChatSystem;