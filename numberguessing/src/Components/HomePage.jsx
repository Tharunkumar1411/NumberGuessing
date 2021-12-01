import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  
}));

const style = {
	borderRadius: "10px",
	width: "4rem",
	height: "4rem",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  padding: "1rem"

}

const btnStyle = {
  border: "0.4rem solid darkblue",
  borderRadius: "10px",
	width: "4rem",
	height: "4rem",
	margin: "0 auto",
	display: "grid",
  padding: "1rem"
}


const Square = (props) => {
  return(
      <button onClick={props.onClick} id={props.id} style={btnStyle}>{props.id}</button>
  )
}

export default function ButtonAppBar() {
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
      [2, 5, 8],
    ];

    const selectedValues = []
    const onClick = (props) => {
        
        document.getElementById(`${props}`).innerHTML = "X";
        selectedValues.push(props);

        (state  === 3)? result(selectedValues): state += 1;

        callComputer();
    }

    const result = (x) => {
        let values =  lines.map((ele) =>{ return ele.filter(e => e == x)})
        console.log(values)
        
    }

    const callComputer = () => {

    }


    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                News
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

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
          </div>
        </div>
    );
}
