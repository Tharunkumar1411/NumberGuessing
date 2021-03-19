import React from 'react';
import Example from './CardComponent';
import ButtonAppBar from './topNav';
import { Button,ButtonGroup} from 'reactstrap';

const GamePage = (props) => {
    return(
        <div>
            <ButtonAppBar /><br /><br /><br />

            <h2>Welcome {localStorage.getItem("name")}</h2>

            <Example /><br />

          
        </div>
    )
}

export default GamePage;