import Header from './Header'
import Main from './Main'
import Home from './Home'
import React, {Component} from 'react';
import Footer from './Footer'
import AdminDashboard from "./AdminDashboard";
import Login from "./login";
import ProductLayout from "./productLayout";
import Register from "./register";
import ListUser from "./ListUser";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import User from "./User";
import Roster from "./Roster";


const RouteHome =() =>
    (

        <Switch>
            <Route exact path = "/home" component={ProductLayout}/>
            <Route exact path='/home/register' component={Register}/>
            <Route exact path='/home/login' component={Login}/>
        </Switch>
    );

export default RouteHome
