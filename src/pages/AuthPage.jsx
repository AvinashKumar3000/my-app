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
        height: "350px",
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
    alert: {
        marginTop: '30px'
    },
    btn: {
        marginBottom: '-200px'
    }
})
const AuthPage = (props) => {
    const [id, setid] = useState(94)
    const [username, setusername] = useState("avinash")
    const [password, setpassword] = useState("default")
    const [msg, setmsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"id":id,"username":username,"password":password});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
        
       

        if (username !== "" && password !== "") {
            fetch("https://springboot-lemon.herokuapp.com/employee/authentication", requestOptions)
            .then(response => response.text())
            .then(result => {
                if(result == "true"){
                    localStorage.setItem("employeeId",id)
                    localStorage.setItem("employeeName",username)
                    props.handleState(true)
                }else{
                    window.alert("wrong authentication")
                }
            })
            .catch(error => console.log('error', error));
        } else {
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
                            id="id"
                            label="id"
                            variant="outlined"
                            fullwidth
                            className={classes.input}
                            value={id}
                            type="number"
                            onChange={(e) => { e.preventDefault(); setid(e.target.value) }}
                        /><TextField
                            id="username"
                            label="username"
                            variant="outlined"
                            fullwidth
                            className={classes.input}
                            value={username}
                            onChange={(e) => { e.preventDefault(); setusername(e.target.value) }}
                        />
                        <TextField
                            id="password"
                            label="password"
                            variant="outlined"
                            fullwidth
                            className={classes.input}
                            value={password}
                            onChange={(e) => { e.preventDefault(); setpassword(e.target.value) }}
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
                            className={classes.btn}
                        >
                            log in
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.alert} style={msg === "" ? { display: "none" } : { display: 'block' }}>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    {msg}
                </Alert>
            </Container>

        </div>
    )
}

export default AuthPage;