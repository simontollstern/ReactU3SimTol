import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import withHttpRequests from '../../components/withhttprequests/withHttpRequests';
import style from './UserScreen.module.css';

// Page showing a single user (/user/:name)
// The router redirects to /login if no param is passed
function UserScreen(props){
  const [user, setUser] = useState({});
  const [addressToggled, setAddressToggled] = useState(false);

  useEffect(() => {
    props.getUser(props.match.params.id)
    .then(res => res.json())
    .then(data => {
      setUser(data);
    });
  });

  // Toggles the state which controls if the address is hidden or not
  const toggleAddress = () => {
    setAddressToggled(!addressToggled);
  }

  if(props.match.params.id){
    return(
      <div className={style.user}>
        <Card>
          <img src="http://placekitten.com/280/140" alt="placekitten" />
          <h1>{user.username}</h1>
          <p>{user.name}</p>
          <p><i>{user.email}</i></p>
          {addressToggled &&
            <div>
              <p>{user.address.city}</p>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
            </div>
          }
          <button onClick={toggleAddress}>{addressToggled ? 'Hide address' : 'Show address'}</button>
        </Card>
      </div>
    );
  }
  return(
    <div className={style.user}>
      <Card>
        <p>No user is shown because no params were sent</p>
      </Card>
    </div>
  );
}

UserScreen.propTypes = {
  match: PropTypes.object.isRequired
}

export default withHttpRequests(UserScreen);
