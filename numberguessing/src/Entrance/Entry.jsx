import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width:"50%",
    marginLeft:"auto",
    marginRight:"auto"
  },
  content:{
    textAlign:"center",
  },
  topNav:{
    backgroundColor:"green",

  },
  level:{
      padding:'10px',
      marginTop:"3px",
      borderRadius:"15px",
      outline:'none',
  },
  range:{
    padding:'10px',
    marginTop:"3px",
    borderRadius:"15px",
    outline:'none',
  },
  name:{
    padding:'10px',
    marginTop:"3px",
    borderRadius:"15px",
    outline:'none',
  },
  innerCard:{
      marginLeft:"auto",
      marginRight:"auto"
  }
  
});

export default function SimpleCard() {
    const history = useHistory();
    useEffect(() => {
        history.push("/");
    })

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.topNav}>Guessing</Typography>  

        <Card>
            <CardActions>
                <FormControl className={classes.innerCard}>
                    <input placeholder="name" className={classes.name}></input>

                    <select className={classes.level}>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>

                    <select className={classes.range}>
                        <option>Range 1 to 100</option>
                        <option>100 to 1000 </option>
                        <option>more than 1000</option>
                    </select>
                </FormControl>
            </CardActions>
        </Card>  
    </CardContent>
    </Card>
  );
}
