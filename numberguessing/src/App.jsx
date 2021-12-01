import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Entrance from './Entrance/Entry';

function App(){

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Entrance} />
                    <Route path="/homepage" exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
