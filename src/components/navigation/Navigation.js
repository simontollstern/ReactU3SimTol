import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import LoginScreen from '../../screens/login/LoginScreen';
import UserScreen from '../../screens/user/UserScreen';
import style from './Navigation.module.css';

// Component providing navigations links and rendering screens
class Navigation extends Component{
  render(){
    return(
      <div className={style.navigation}>
        <Router>
          <nav>
            <div>
              <NavLink activeClassName={style.active} exact to="/dashboard">Dashboard</NavLink>
              <NavLink activeClassName={style.active} to="/login">Login</NavLink>
              <NavLink activeClassName={style.active} to="/user">User</NavLink>
            </div>
          </nav>

          <div className={style.routewrapper}>
            <Switch>
              <Redirect from='/' exact to='/login' />
            </Switch>
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/login' component={LoginScreen} />
            <Switch>
              <Redirect from='/user' exact to='/login' />
            </Switch>
            <Route path='/user/:id' component={UserScreen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
