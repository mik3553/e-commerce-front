import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register";
import MyAccount from "./components/account/MyAccount";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/login' component={LogIn}/>
                <Route path='/inscription' component={Register}/>
                <Route path='/mon-compte' component={MyAccount}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
