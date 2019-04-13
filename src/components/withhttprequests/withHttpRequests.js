import React from 'react';

// Provides logic to interact with the API
function withHttpRequests(Component, data){
  return class extends React.Component{

    // Returns all users from the API
    getUsers = () => {
    return  fetch('http://api.softhouse.rocks/users', {
        method: 'GET'
      })

    }

    // Returns the user with the specified ID from the API
    getUser = (id) => {
      return fetch(`http://api.softhouse.rocks/users/${id}`, {
        method: 'GET'
      })
    }

    // Adds a new user to the API from the body sent
    addUser = (user) => {
      return fetch(`http://api.softhouse.rocks/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    }

    render(){
      return <Component getUsers={this.getUsers} getUser={this.getUser} addUser={this.addUser} {...this.props} />
    }
  }
}

export default withHttpRequests;
