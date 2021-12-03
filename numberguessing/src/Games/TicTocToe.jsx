import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, LinearProgress, List, ListListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card:{
      width: "30%",
      margin: "5rem",
      padding: "1rem",
      fontWeight: "bold",
      marginRight: "auto",
      marginLeft: "auto"
    },
    grid4:{
      width:"100%",
      height: "100hv",
    //   paddingTop: "3rem"
    },
    alertDialogTitle:{
      textAlign: "center",
      backgroundColor: "grey",
    }
}));

const style = {
	borderRadius: "10px",
	width: "4rem",
	height: "4rem",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  padding: "1rem",
  marginLeft: "30%"

}

const btnStyle = {
  border: "0.4rem solid darkblue",
  borderRadius: "10px",
	width: "4rem",
	height: "4rem",
	display: "grid",
  padding: "1rem",
  fontSize: "1rem",
  fontWeight: "bold"
}

const Square = (props) => {
  return(
      <button onClick={props.onClick} id={props.id} style={btnStyle}>{props.id}</button>
  )
}

export default function TicTocToe() {
  const [open, setOpen] = React.useState(false);
  const [user,setUser] = useState([]);
  const [string,setString] = useState({one:'win',two:"well done"})
  var resultString = {one:"Win",two:"Well Done"}

  var selectedValues = [];

  const handleClickOpen = (x) => {
    [resultString.one,resultString.two] = x;
    setString({...string, one:resultString.one, two:resultString.two});
    setTimeout(() => {
      setOpen(true);
    },500);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();

  };
    var state = 1 ;
    const classes = useStyles();
    var initialValue = "";

    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [3, 6, 9],
      [1, 4, 7],
      [2, 5, 8],
      [1, 5, 9],
      [3, 5, 7],
    ];

    var positions = [1,2,3,4,5,6,7,8,9];

    const result = (x) => {
      var resultValues;
      for(let i=0; i < lines.length; i++){
          resultValues = x.filter((e) => lines[i].includes(e));
          
          if(resultValues.length == 3){
            break
          }
      }
      
      (resultValues.length == 3)? handleClickOpen(["win","Well Done"]): handleClickOpen(["loose","Better Luck Next Time"]);
  }

  const callComputer = () => {
      const Random = randomValue();
  }

  const onClick = (props) => {
        document.getElementById(`${props}`).innerHTML = "X";
        document.getElementById(`${props}`).style.pointerEvents = "none";
        document.getElementById(`${props}`).style.color = "green";

        selectedValues.push(props);

        (state  === 3)? result(selectedValues): state += 1;
        callComputer();
  }

  const randomValue = () => {
        let userInput = [...selectedValues];
        var random;

        do {
          random = Math.floor((Math.random() * 9) + 1); 
        } while (userInput.includes(random));
        userInput.push(random);

        document.getElementById(`${random}`).style.pointerEvents = "none";
        document.getElementById(`${random}`).style.color = "red";
        document.getElementById(`${random}`).innerHTML = "O";

        // console.log(random)
  }

        return (
            <div className={classes.root}>

                <Grid container spacing={2} gap={2}>
                    <Grid ListItem xs={12} md={8} gap={2}>
                    <div style={style}>
                        <Square id="1" value={initialValue} onClick={() => onClick(1)} />
                        <Square id="2" value={initialValue} onClick={() => onClick(2)} />
                        <Square id="3" value={initialValue} onClick={() => onClick(3)} />
                        <Square id="4" value={initialValue} onClick={() => onClick(4)} />
                        <Square id="5" value={initialValue} onClick={() => onClick(5)} />
                        <Square id="6" value={initialValue} onClick={() => onClick(6)} />
                        <Square id="7" value={initialValue} onClick={() => onClick(7)} />
                        <Square id="8"  value={initialValue} onClick={() => onClick(8)} />
                        <Square id="9" value={initialValue} onClick={() => onClick(9)} />
                    </div><br /><br />
                    </Grid>

                    <Grid ListItem xs={12} md={4} className={classes.grid4}>
                        <div>
                        <h3>Welcome, {localStorage.getItem("name")}</h3>
                        <h4>TIC-TOC-TOE</h4>
                        <p>
                            <ul>
                                <li><code style={{fontWeight: "bold"}}>Step1:</code> Have the first player go first</li>
                                <li><code style={{fontWeight: "bold"}}>Step2:</code> Have the second player go second.</li>
                                <li><code style={{fontWeight: "bold"}}>Step3:</code> Keep alternating moves until one of the players has drawn a row of three symbols or until no one can win</li>
                                <li><code style={{fontWeight: "bold"}}>Step4:</code> Keep practicing.</li>
                            </ul>
                        </p>
                        </div>
                    </Grid>
                </Grid>
                
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle className={classes.alertDialogTitle}>
                {`${string.one}!!!!`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    {`${string.two} ${localStorage.getItem("name")}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
