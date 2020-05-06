import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import Player from './pages/Player';
import Master from './pages/Master';
import Role from './pages/Role';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home} />
            <Route path="/player" component={Player} />
            <Route path="/master" component={Master} />
            <Route path="/role" component={Role} />
        </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
