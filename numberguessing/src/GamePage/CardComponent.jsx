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
  const [clue,setClue] = useState("your clue is")
  const [number,setNumber] = useState({num:0});
  const [attempts,setAttempts] = useState(5);
  const [progress,setProgress] = useState(100);
  const [sysnumber,setSysnumber] = useState("I am Ready");
  const [winner,setWinner] = useState(false);
  const [losser,setLosser] = useState(false);



  function clueSet() {
    const greaterLesser = random > number.num;
    const oddEven = (random) % 2 === 0;
    var addString;
    if(attempts === 5){
      setAttempts(attempts-1);
      if(greaterLesser){
        addString = "Secret number is greater";
      }else{
        addString = "Secret number is lesser"
      }

      if(oddEven){
        addString = addString + " and is even";
      }else{
        addString = addString + " and is Odd";
      }
      setClue(addString);
    }else if(attempts === 4){
      setAttempts(attempts-1);

      var MoreTen = parseInt(random) + 100;
      var lessTen = parseInt(random) - 100;

      setClue(`System number lies between ${lessTen} and ${MoreTen}`);
    }else if(attempts === 3){
      setAttempts(attempts-1);

      var MoreTen = parseInt(random) + 10;
      var lessTen = parseInt(random) - 10;

      setClue(`System number lies between ${lessTen} and ${MoreTen}`);
  }else if(attempts === 2){
    setAttempts(attempts-1);

    var defineSysnum = random;
    var sum = 0;
    while(defineSysnum !== 0){

      var lastDegit = defineSysnum%10;

      sum = sum + lastDegit;

      defineSysnum = defineSysnum/10;

    }

    setClue(`The sum of System number is ${sum}`);
  }else if(attempts === 1){
    setAttempts(attempts-1);

    setClue("ithuku mela clue kuduka mudiyathuda deii");
  }else{
    setClue("error");
  }

  }
  const submitHandler = () => {
   console.log(random)
   if(random === number.num || (random !== number.num && attempts ===1)) {
    setWinner(true);
   }else{
    clueSet();
    setProgress(progress-20);
     setWinner(false);
     setLosser(false);
   }

 } 

 const handleClose = () => {
  setWinner(false);
  setLosser(false)
};


const handleCloseer = () => {
  window.location.reload();
};
 const winnerBody = (
  <div  className={classes.modelbody}>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
     You won the battle with ${progress} score.
    </p>
    <button onClick = {handleCloseer}>done</button>
  
  </div>
);

const losserBody = (
  <div  className={classes.modelbody}>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
     You loss the battle with ${progress} score.
    </p>
    <button onClick = {handleCloseer}>done</button>
  
  </div>
);


  return (
    <div className={classes.root}>
      {/* {<ForClues number={random} guess={number.num}/>} */}
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>System</Paper><br />

          <Card className={classes.system}>
            
            <Card className={classes.innerCard}><CardContent>{sysnumber}</CardContent></Card><br></br>

            <Card className={classes.innerCard}><CardContent>Attempts: {attempts}</CardContent></Card>

          </Card>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Player</Paper><br />

          <Card className={classes.system}>
          <Card className={classes.innerCard}><CardContent>player input: {number.num}</CardContent></Card><br></br>
          <Card className={classes.innerCard}><CardContent>Score is {progress}</CardContent></Card>
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

<Modal
        open={winner}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {winnerBody}
      </Modal>

      <Modal
        open={losser}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {losserBody}
      </Modal>
    </div>
  );
}

