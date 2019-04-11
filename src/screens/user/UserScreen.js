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

  const toggleAddress = () => {
    setAddressToggled(!addressToggled);
  }

  if(props.match.params.id){
    return(
      <Card>
        <div className={style.user}>
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
        </div>
      </Card>
    );
  }
  return(
    <Card>
      <p>No user is shown because no params were sent</p>
    </Card>
  );
}

UserScreen.propTypes = {
  match: PropTypes.object.isRequired
}

export default withHttpRequests(UserScreen);
