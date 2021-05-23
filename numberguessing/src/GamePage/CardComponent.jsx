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
        clue += (rand%2 === 0)? " and is Even": " and is Odd";
      }else{
        clue += "The random number is placed 1nd half of the range";
        clue += (rand%2 === 0)? " and is Even": " and is Odd";

      }
      return clue;
    }

   var finalClueOne =  clueOne(random);

    setProperty({...property,clue:finalClueOne});
  },[])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

  const [sysnumber,setSysnumber] = useState("I am Ready");
  const [winner,setWinner] = useState(false);
  const [losser,setLosser] = useState(false);

  
const setClue = (number,rand,attempt) => {
  var clue = "";
  console.log(number,rand[0],attempt);

  switch (attempt) {
    case 4:
      function clueFour() {
        if(rand[0] === 1 || rand[0] === 2){
          clue += "Is Prime Number"
        }else if( (rand[0]%2 === 0 || rand[0]%3 === 0 || rand[0]%5 === 0 || rand[0]%7 === 0)){
          clue += "Is Not Prime Number"
        }else{
          clue += "Is  Prime Number"
        }
        return clue;
      }
      clueFour();
      break;
    case 3:
      function clueThree() {
        if(rand > number){
          clue += `Winning Number is greater than ur Guess ${number}`;
        }else{
          clue += `Winning Number is lesser than ur Guess ${number}`
        }
        return clue;
      }
      clueThree();
      break;
    case 2:
      function clueTwo() {
        if(rand < 10){
          clue += "The Winning Number is single length Number"
        }else{
            if(number > rand && (number - rand) > 25 ){
              clue += `The winning numberr range is Upto ${(parseInt(rand)+20)}`;

            }else if(rand > number && (rand - number) > 25 ){
              clue += `The winning numberr range is Upto ${(parseInt(rand)+20)}`;

            }else if(rand > (localStorage.getItem("range")-10)){
              clue += "The winning number is nearest to the set range value"
            }else{
              clue += `The winning numberr range is Upto ${(parseInt(rand)+20)}`;

            }
        }
       }
       
       clueTwo();
      break;
    case 1:
       function clueOne() { 
         if(rand > 9){
          clue += `Last degit of this winning number ${parseInt(rand%10)}`;

         }else{
           clue += `you have only 9 posibilities just think to win`
         }
         return clue;

       }
       clueOne();
      break;
    default:
      break;
  }

  setProperty({...property,clue:clue,attempts:attempt-1});

}
 
const submitHandle = () => {
  console.log("hi")
  // eslint-disable-next-line eqeqeq
  if(property.number == random){
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

