import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import BasicTable from "./BasicTable";
import InOut from "./InOut";


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Attendance = () => {
    const classes = useStyles()
    const updateTable = () => {
      childRef.current.load();
    }
    const childRef = useRef()
    return (
        <div className={classes.root}>
            <InOut updateTable={updateTable}/>
            <BasicTable ref={childRef}/>
        </div>
    )
}
export default Attendance;