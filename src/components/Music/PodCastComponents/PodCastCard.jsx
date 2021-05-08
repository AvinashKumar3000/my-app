import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function PodCastCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [data, setdata] = useState({})
  useEffect(() => {

    fetch("https://springboot-lemon.herokuapp.com/podcast")
      .then(response => response.json())
      .then(result => {
        setdata(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Podcast from the company
        </Typography>
        <Typography variant="h5" component="h2">
          Audio
          <audio controls>
            <source src={data.audioLink}/>
          </audio>
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {data.about}
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
          <br />
              {'"a benevolent smile"'}
            </Typography>
      </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">{data.time}</Button>
          </CardActions>
    </Card>
  );
}
