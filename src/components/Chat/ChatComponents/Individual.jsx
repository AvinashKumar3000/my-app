import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import ChatCard from './ChatCard'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "85vh",
        paddingTop: '10px'
    },
    btn: {
        float: 'right',
        margin: '10px'
    }
}));


const Individual = (props) => {
    const [data, setdata] = useState([])
    const classes = useStyles();
    useEffect(() => {
        fetch("https://springboot-lemon.herokuapp.com/employee/getAllEmployeesByCID/" + 53)//+ localStorage.getItem("employeeId"))
            .then(response => response.json())
            .then(result => {
                setdata(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }, [])
    const chatClick = (ele) => {
        ele = {...ele,type:"ind"}
        props.showChat(ele);
    }
    return (
        <div className={classes.root}>

            <Grid container spacing={0}>
                {
                    data.map((ele) => {
                        if(ele.id.toString() != localStorage.getItem("employeeId")){
                            return (
                                <div
                                    style={{width:'100%'}}
                                    onClick={(e) => {
                                        console.log("clicked")
                                        e.preventDefault();
                                        chatClick(ele);
                                    }}
                                >
                                    <ChatCard
                                        name={ele.name}
                                        time={ele.id}
                                    />
                                </div>
                            )
                        }else{
                            return (
                                ""
                            )
                        }
                    })
                }

            </Grid>
        </div>
    )
}

export default Individual;