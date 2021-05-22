import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';


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
    backgroundColor:"rgba(13, 17, 38, 0.57)",
  },
  system:{
 
    width:"80%",
    marginRight:"auto",
    marginLeft:"auto",
    padding:"10px",
    borderRadius:"15px",
    
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

    },
    
    modelbody:{
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, 
    modal:{
     marginRight:"auto",
     marginLeft:"auto",
    },innerCard:{
      height:"40px",
      backgroundColor:"rgba(210, 207, 218, 0.87)"
    }
  
}));

export default function Example() {
  const classes = useStyles();

  const [random,setRandom] = useState([Math.floor(Math.random() * (localStorage.getItem("range")))]);
  const [property,setProperty] = useState({clue:"",number:0,attempts:4,progress:100})

  useEffect(() => {
    var clue = "";
    function clueOne(rand){
      var range = localStorage.getItem("range");
      if(rand > (range/2)){
        clue += "The random number is placed 2nd half of the range";
        clue += (rand%2 === 0)? "and is Even": " and is Odd";
      }else{
        clue += "The random number is placed 1nd half of the range";
        clue += (rand%2 === 0)? "and is Even": " and is Odd";

      }
      return clue;
    }

   var finalClueOne =  clueOne(random);

    setProperty({...property,clue:finalClueOne});
  },[random,property])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

  const [sysnumber,setSysnumber] = useState("I am Ready");
  const [winner,setWinner] = useState(false);
  const [losser,setLosser] = useState(false);

  
const setClue = (number,rand,attempt) => {
  var clue = "";

  switch (attempt) {
    case 4:
      return function clueFour() {
        if(number === 1 || number === 2){
          clue += "Is Prime Number"
        }else if( number%2 || number%3 || number%5 || number%7 !== 0){
          clue += "Is Prime Number"
        }else{
          clue += "Is Not a Prime Number"
        }
        console.log(clue);
        return clue;
      }
      break;
    case 3:
      return 2;
      break;
    case 2:
      return 3;
      break;
    case 1:
      return 4;
      break;
    default:
      break;
  }
}
 
const submitHandle = () => {
  console.log("hi")
  if(property.number === random){
    alert("you won tha game");
   
  }else{
    setClue(property.number,random,property.attempts)
  }
}






  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>System</Paper><br />

          <Card className={classes.system}>
            
            <Card className={classes.innerCard}><CardContent>{sysnumber}</CardContent></Card><br></br>

            <Card className={classes.innerCard}><CardContent>Attempts: {property.attempts}</CardContent></Card>

          </Card>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Player</Paper><br />

          <Card className={classes.system}>
          <Card className={classes.innerCard}><CardContent>player input: {property.number}</CardContent></Card><br></br>
          <Card className={classes.innerCard}><CardContent>Score is {property.progress}</CardContent></Card>
          </Card>
          
        </Grid>
        
      </Grid><br />

    <form className={classes.roott} >

      <TextField id="outlined-basic" label="Number" type="number" onChange={(e)=> setProperty({...property,number:e.target.value})}  variant="outlined" /><br />

      <Button  className={classes.done} onClick={submitHandle}>Done</Button>
    </form>


    <Card className={classes.clue}>
      <CardContent>{property.clue}</CardContent>
    </Card>

    </div>
  );
}

