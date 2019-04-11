import React from 'react';
import PropTypes from 'prop-types';
import style from './User.module.css';

// The list items containing the user's names
// This may be an overcomplicated solution, but I couldn't get it to work with
// CSS Modules any other way (I suppose one conditional could be used)
function User(props){
  if(props.colorToggled){
    return <li className={`${style.user} ${style.green}`}>{props.name}</li>
  }
  return <li className={`${style.user} ${style.red}`}>{props.name}</li>
}

User.propTypes = {
  colorToggled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default User;
