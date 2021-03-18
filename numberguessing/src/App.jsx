import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Entrance from './Entrance/Entry';
import Home from './GamePage/game'

function App(){

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                 
                </Switch>
            </BrowserRouter>
           
        </div>
    )
}

export default App
