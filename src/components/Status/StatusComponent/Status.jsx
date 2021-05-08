import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MediaCard from './StatusCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: "100vh",
    paddingTop: '20px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    marginLeft: "10px",
    marginRight: '10px'
  },
  details: {
    backgroundColor: 'rgb(201, 201, 201)'
  }
}));

export default function Status() {
  const classes = useStyles();
  const [item, setitem] = useState([])
  useEffect(() => {
    load();
  }, [])

  const load = () => {
    fetch("http://13.232.66.207:8080/status")
      .then(response => response.json())
      .then(result => {
        setitem(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div className={classes.root}>
      {

        item.map((ele) => {
          return (
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{ele.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <MediaCard data={ele}/>
              </AccordionDetails>
            </Accordion>
          )
        })

      }


    </div>
  );
}
