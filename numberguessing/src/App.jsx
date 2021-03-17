import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Entrance from '../src/Entrance/Entry';


function App(){

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Entrance} />
                 
                </Switch>
            </BrowserRouter>
           
        </div>
    )
}

export default App
