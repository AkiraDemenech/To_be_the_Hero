import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Logon from './pages/Logon'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Postar from './pages/Postar'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon}></Route>
                <Route path='/registrar' component={Register} />
                <Route path='/perfil' component={Profile} />
                <Route path='/casos/novo' exact component={Postar}></Route>
            </Switch>
        </BrowserRouter>
    )
}
