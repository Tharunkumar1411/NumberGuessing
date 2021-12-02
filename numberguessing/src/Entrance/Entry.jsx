import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import '@material-ui/core'
import './Entry.css';
import {useHistory} from 'react-router-dom';
// import Select from 'react-select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {  TextField } from '@material-ui/core';

function Entry(){

  const [details,setDetails] = useState({name:"",range:0});

  const history = useHistory()

  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
          
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(age)

    localStorage.setItem("name",details.name);
    localStorage.setItem("range",age);
    history.push("/homepage")
  }
    return(
        <div className="area">
            <Card className="login" style={{width:'16rem',textAlign:'center',marginTop:'50px',backgroundColor:"  rgb(194, 45, 181)"}}>
                <h5>WEB GAME</h5>
            </Card>

            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

            <Card className="login1" style={{width:'16rem',textAlign:'center'}}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <TextField type="text" placeholder="Name" onChange= {e =>setDetails({...details,name:e.target.value})} value={details.name}  required></TextField><br /><br />
                    </Form><br />
                    <button className="buttonStyle" onClick={submitHandler} value="login" >ENTER</button><br /><br />
                </Card.Body>
            </Card>
        </div>

        
    );
}

export default Entry;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// export default function ControlledOpenSelect() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Button className={classes.button} onClick={handleOpen}>
//         Open the select
//       </Button>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-controlled-open-select-label"
//           id="demo-controlled-open-select"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
