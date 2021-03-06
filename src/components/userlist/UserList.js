import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './UserList.module.css';

// The list containing User component, also notifies Dashboard to toggle the color of User
class UserList extends Component{

  // Sends an event to Dashboard to toggle User color
  toggleColor = () => {
    this.props.onToggleColor();
  }

  render(){
    return(
      <div className={style.userlist}>
        <ul>
          {this.props.children}
        </ul>
        <div className={style.buttonWrap}>
          <button onClick={this.toggleColor}>Toggle colors</button>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  onToggleColor: PropTypes.func.isRequired
}

export default UserList;
