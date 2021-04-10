import { makeStyles } from "@material-ui/core";
import React from "react";
import BasicTable from "./BasicTable";
import InOut from "./InOut";


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Attendance = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <InOut/>
            <BasicTable/>
        </div>
    )
}
export default Attendance;