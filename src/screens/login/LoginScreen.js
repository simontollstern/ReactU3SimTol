import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import style from './LoginScreen.module.css';

// Login page (/login)
class LoginScreen extends Component{

  // Redirects to the main page (/dashboard)
  redirect = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render(){
    return(
      <div className={style.loginScreen}>
        <Card info="Enter a username and log in">
          <form onSubmit={this.redirect}>
            <input type="text" />
            <input type="submit" value="Log in" />
          </form>
        </Card>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginScreen;
