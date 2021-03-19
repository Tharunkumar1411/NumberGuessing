import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"30%",
    marginRight:"auto",
    marginLeft:"auto",
    backgroundColor:"rgba(210, 207, 218, 0.87)",
  },
  system:{
    border:'1px solid black',
    width:"80%",
    marginRight:"auto",
    marginLeft:"auto",
    padding:"10px",
    borderRadius:"15px"
  },
  roott: {
      margin: theme.spacing(1),
      width: '25ch',
      marginRight:"auto",
    marginLeft:"auto"
    },
    clue:{
      width:'70%',
      marginRight:"auto",
      marginLeft:"auto",
      backgroundColor:"rgba(210, 207, 218, 0.87)",

    }
  
}));

export default function Example() {
  
  const classes = useStyles();
  const rang = localStorage.getItem("range");
  const [random,setRandom] = useState([Math.floor(Math.random() * rang)])
  const [clue,setClue] = useState("your clue is")
  const [number,setNumber] = useState({num:0,progress:100,sysnumber:"I am Ready with my number",attempts:5});



  const submitHandler = () => {
  console.log(random);
    if(random > number.num){
      setClue("system number is greater ");
      setNumber.attempts((number.attempts-1));
    }
    else if(random < number.num){
      setClue("system number is lesser");
    }
    else{
      setClue("you won the match");
      alert(`you won ${localStorage.getItem("name")}`);
    }
 } 
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>System</Paper>

          <Card className={classes.system}>
            <CardContent>{number.sysnumber}</CardContent>

            <CardContent>Remaining Attempts is {number.attempts}</CardContent>

          </Card>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Player</Paper>

          <Card className={classes.system}>
          <CardContent>waiting for player input {number.num}</CardContent>
          <CardContent>Your Score is {number.progress}</CardContent>
          </Card>
          
        </Grid>
        
      </Grid><br />

     


    <form className={classes.roott} noValidate autoComplete="off" >

      <TextField id="outlined-basic" label="Number" type="number"  variant="outlined" onChange={e => setNumber ({...number,num:e.target.value})} /><br />

      <Button onClick={submitHandler} className={classes.done}>Done</Button>
    </form>


<Card className={classes.clue}>
  <CardContent>{clue}</CardContent>
</Card>


    
  


    </div>
  );
}
