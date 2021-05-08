import { Button, Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        paddingBottom: "50px"
    },
    input: {
        marginBottom: "10px"
    }
}));


const Post = (props) => {
    const classes = useStyles();
    const [picLink, setpicLink] = useState("")
    const [status, setstatus] = useState("")


    const updateData = (e) => {
        const data = {
            name: localStorage.getItem("employeeName"),
            time: new Date(),
            picLink: picLink,
            status: status,
            empId: localStorage.getItem("employeeId")
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://13.232.66.207:8080/status", requestOptions)
            .then(response => response.text())
            .then(result => {
                window.alert("updated successfully")
                console.log(result)
                setpicLink("")
                setstatus("")
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className={classes.root}>
            <Container>
                <Typography className={classes.heading}>
                    STATUS INFO
                </Typography>
               
                <TextField
                    id="picLink"
                    label="picLink"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    value={picLink}
                    onChange={ (e) => setpicLink(e.target.value)}
                />
                <TextField
                    id="status"
                    label="status"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    value={status}
                    onChange={ (e) => setstatus(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.input}
                    onClick={updateData}
                >
                    update
                </Button>
            </Container>
        </div>
    )
}

export default Post;