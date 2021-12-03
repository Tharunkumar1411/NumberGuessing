import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import MenuBar from "@material-ui/icons/MenuOpen";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Link } from '@material-ui/core';
import TicTocToe from '../Games/TicTocToe';
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
    },
    alertDialogTitle:{
      textAlign: "center",
      backgroundColor: "grey",
    }
}));

export default function ButtonAppBar() {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();
  const showSidebar = () => setSidebar(!sidebar);


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
              <label style={{fontSize: "1rem", fontWeight: "bold",paddingLeft:"3rem"}}>Web Games</label>
              <RefreshIcon style={{paddingLeft: "1rem"}} onClick={() => window.location.reload()}/>

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
            <TicTocToe />

        </div>
    );
}
