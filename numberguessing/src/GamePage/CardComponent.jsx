import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"30%",
    height:"fit-content",
    marginRight:"auto",
    marginLeft:"auto",
    backgroundColor:"rgba(13, 17, 38, 0.57)",
  },
  vs:{
    textAlign: 'center',

  },
  system:{
 
    width:"fit-content",
    marginRight:"auto",
    marginLeft:"auto",
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

    }
    ,innerCard:{
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
        clue += "The random number is placed 1st half of the range";
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

  
const setClue = (number,rand,attempt,progres) => {
  var clue = "";

  switch (attempt) {
    case 4:
      function clueFour() {
        if(rand[0] === 1 || rand[0] === 2 || rand[0] === 3 ||rand[0] === 5 || rand[0] === 7){
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

  setProperty({...property,clue:clue,attempts:attempt-1,progress:progres-20});

  if(attempt == 0 && rand !== number){
    alert(`you loss the game score is ${property.progress-20}`);
    window.location.reload();
  }

}
 
const submitHandle = () => {
  // eslint-disable-next-line eqeqeq
  if(property.number == random){
    alert("you won tha game");
    window.location.reload();
   
  }else{
    setClue(property.number,random,property.attempts,property.progress)
  }
}


  return (
    <div className={classes.root}>
   
          <Paper className={classes.paper}>System <h5>Score is {property.progress}</h5>
</Paper>
          <h5 className={classes.vs}>vs</h5>

          <Paper className={classes.paper}>Player <h5>Attempts: {property.attempts}</h5>
</Paper>


      
      <Card className={classes.system}>
            
  
      </Card>

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

