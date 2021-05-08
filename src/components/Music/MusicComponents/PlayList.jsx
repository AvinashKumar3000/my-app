import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import PlayListCard from "./PlayListCard";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "85vh",
        paddingBottom:"120px"
    },
    btn: {
        float: 'right',
        margin: '10px'
    }
}));


const PlayList = (props) => {
    const classes = useStyles();
    const [playlist, setplaylist] = useState([])
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        fetch("http://13.232.66.207:8080/playlist/" + localStorage.getItem("employeeId"))
            .then(response => response.json())
            .then(result => {
                setplaylist(result)
            })
            .catch(error => console.log('error', error));
    }
    const handleCreate = (e) => {
        e.preventDefault();
        var name = window.prompt("play list name")
        if (name != null) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(
                {
                    "name": name,
                    "employeeId": 94
                });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://13.232.66.207:8080/playlist", requestOptions)
                .then(response => response.text())
                .then(result => {
                    window.alert("created sucess")
                    console.log(result)
                    getData();
                })
                .catch(error => console.log('error', error));
        }
    }
    const handleData = (data) => {
        props.handleData(data)
      }
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" className={classes.btn}
                        onClick={handleCreate}
                    >
                        create playlist
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                {
                    playlist.map((item) => {
                        return (
                            <PlayListCard
                                id={item.id}
                                name={item.name}
                                creator={'by avinash'}
                                type={"folder"}
                                handleData={handleData}
                            />
                        )
                    })
                }

            </Grid>
        </div>
    )
}

export default PlayList;