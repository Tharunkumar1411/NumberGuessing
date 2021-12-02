import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, LinearProgress, List, ListListItem } from '@material-ui/core';
import { Card, Link } from '@material-ui/core';
import './Home.css';
import MenuBar from "@material-ui/icons/MenuOpen"
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
      backgroundColor: "green"
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

export default function ButtonAppBar() {
  const [sidebar, setSidebar] = useState(false);
  var selectedValues = [];

  const [user,setUser] = useState([])
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

        selectedValues.push(props);

        (state  === 3)? result(selectedValues): state += 1;
        setUser(selectedValues)
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
            

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-ListItems' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <h2>Other Games</h2>
                </li>
                {SidebarData.map((ListItem, index) => {
                  return (
                    <li key={index} className={ListItem.cName}>
                      <button className="btn">
                        <span>{ListItem.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Grid container spacing={2}>
                <Grid ListItem xs={8}>
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

                  <Card className={classes.card}>
                      Attemts 3
                      <LinearProgress />
                  </Card>
                </Grid>
                <Grid ListItem xs={4} className={classes.grid4}>
                    <div>
                      <h3>Welcome, {localStorage.getItem("name")}</h3>
                      <h4>TIC-TOC-TOE</h4>
                      <p></p>
                    </div>
                </Grid>
            </Grid>
              

              
        </div>
    );
}
