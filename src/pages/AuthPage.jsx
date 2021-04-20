import { Container, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import React, { useState } from "react";
import "../css/MusicLibrary.css";
import { Alert, AlertTitle } from '@material-ui/lab';
import Login from "../services/Login";

const myStyles = makeStyles({
    root: {
    },
    container: {
        marginTop: '25vh',
        height: "50vh",
        width: '80vw',
        boxShadow: "2px 2px 5px gray",
        paddingTop: '10%'
    },
    section: {
        height: '80%'
    },
    input: {
        marginTop: "20px"
    },
    title: {
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '25px',
        fontFamily: 'fantasy',
        color: "gray"
    },
    alert:{
        marginTop:'30px'
    }
})
const AuthPage = (props) => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [msg, setmsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username !== "" && password !== "" ){
            if(Login(username,password)){
                props.handleState(true)
            }else{
                setmsg("username or password is wrong")
            }
        }else{
            setmsg("the inputs are empty")
        }
        setusername('')
        setpassword('')
    }
    const classes = myStyles();
    return (
        <div className={classes.root}>
            <Container
                align="center"
                justify="center"
                direction="column"
                className={classes.container}
            >
                <Grid
                    container
                    className={classes.section}
                >
                    <Grid item >
                        <Typography className={classes.title}>
                            LOG-IN
                            </Typography>
                        <TextField
                            id="username"
                            label="username"
                            variant="outlined"
                            fullwidth
                            className={classes.input}
                            value={username}
                            onChange={(e)=>{e.preventDefault();setusername(e.target.value)}}
                        />
                        <TextField
                            id="password"
                            label="password"
                            variant="outlined"
                            fullwidth
                            className={classes.input}
                            value={password}
                            onChange={(e)=>{e.preventDefault();setpassword(e.target.value)}}
                        />
                    </Grid>
                </Grid>

                <Grid
                    align="center"
                    justify="center"
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            log in
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.alert} style={msg === "" ? {display:"none"}:{display:'block'}}>
                <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                        {msg}
                </Alert>
            </Container>

        </div>
    )
}

export default AuthPage;