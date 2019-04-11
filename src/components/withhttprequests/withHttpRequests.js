import React from 'react';

function withHttpRequests(Component, data){
  return class extends React.Component{
    getUsers = () => {
    return  fetch('http://api.softhouse.rocks/users', {
        method: 'GET'
      })

    }

    getUser = (id) => {
      return fetch(`http://api.softhouse.rocks/users/${id}`, {
        method: 'GET'
      })
    }

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
