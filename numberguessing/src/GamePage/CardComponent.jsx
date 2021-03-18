import React from 'react';
import { Button,ButtonGroup} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './gamepage.css'
import Card from 'react-bootstrap/Card'
import System from '@material-ui/icons/Computer'
import { CardContent } from '@material-ui/core';
const Example = (props) => {
  return (
    <div>
        
       <Card className="systemCard">
           <h4 className="cardHead">System</h4>

            
            <CardContent className="cardContent"> for number show</CardContent><br />

            <CardContent className="cardContent">for clue show</CardContent><br />

       </Card>
       <Card className="userCard">
           <h4 className="cardHead">System</h4>

            
            <CardContent className="cardContent"> for number show</CardContent><br />

            <CardContent className="cardContent">for clue show</CardContent><br />

       </Card><br />


       <ButtonGroup color="primary" aria-label="outlined primary button group" className="btnGrp">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>0</Button><br />
            <Button>done</Button>
</ButtonGroup><br />
       

      
    </div>
  );
};

export default Example;