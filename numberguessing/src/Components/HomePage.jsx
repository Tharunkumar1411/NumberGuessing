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
import { Link } from '@material-ui/core';
import './Home.css';
import MenuBar from "@material-ui/icons/MenuOpen"
const useStyles = makeStyles((theme) => ({

}));

const style = {
	borderRadius: "10px",
	width: "4rem",
	height: "4rem",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  padding: "1rem",
  margin: "0 auto"

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

export default function ButtonAppBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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

    const selectedValues = [];
    const result = (x) => {
      var resultValues;
      for(let i=0; i < lines.length; i++){
          resultValues = x.filter((e) => lines[i].includes(e));
          
          if(resultValues.length == 3){
            break
          }
      }
      
      (resultValues.length == 3)? console.log("win"): console.log("loose")
  }

  const callComputer = () => {
      const Random = randomValue();
  }

  const onClick = (props) => {
        document.getElementById(`${props}`).innerHTML = "X";
        document.getElementById(`${props}`).style.pointerEvents = "none";
        document.getElementById(`${props}`).style.color = "green";

        let att = state;
        console.log(att-1)
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




    const SidebarData = [
      {
        title: 'Home',
        path: '/',
        cName: 'nav-text'
      },
      {
        title: 'Reports',
        path: '/reports',
        cName: 'nav-text'
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'nav-text'
      },
    ];

    return (
        <div className={classes.root}>
          

        <div className='navbar'>
          <Link className='menu-bars'>
            <MenuBar onClick={showSidebar} />
          </Link>
          <label style={{fontSize: "1rem", fontWeight: "bold"}}>Web Games</label>
        </div>
        <h3 style={{float: "right",margin: "1rem"}}>Attemts <code>{3}</code></h3><br />

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <h2>Other Games</h2>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <button className="btn">
                    <span>{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

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
