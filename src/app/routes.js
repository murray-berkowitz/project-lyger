import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
}

export default Routes