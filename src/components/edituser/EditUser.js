import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withHttpRequests from '../../components/withhttprequests/withHttpRequests';
import style from './EditUser.module.css';

// Component containing the form for adding and removing users
class EditUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      nameField: '',
      usernameField: '',
      emailField: '',
    }
  }

  // Updates the state with the value from the input field
  updateNameField = (e) => {
    this.setState({ nameField: e.target.value });
  }

  // Updates the state with the value from the input field
  updateUsernameField = (e) => {
    this.setState({ usernameField: e.target.value });
  }

  // Updates the state with the value from the input field
  updateEmailField = (e) => {
    this.setState({ emailField: e.target.value });
  }

  // Sends an event (with the input from state) to the Dashboard component to add a new user
  addUser = (e) => {
    e.preventDefault();
    if(this.state.inputValue !== ''){
      const newUser = {
        name: this.state.nameField,
        username: this.state.usernameField,
        email: this.state.emailField,
        address: {
          street: 'some street',
          suite: 'some suite',
          city: 'some city',
          zipcode: 'some zipcode',
          geo: {
            lat: 0,
            lng: 0
          }
        }
      }
      this.props.addUser(newUser)
      .then(() => {
        this.props.onAddUser();
      });
      this.setState({ nameField: '' });
      this.setState({ usernameField: '' });
      this.setState({ emailField: '' });
    }
  }

  // Sends and event to the Dashboard component to remove a user
  removeUser = () => {
    this.props.onRemoveUser();
  }

  render(){
    return(
      <div className={style.edituser}>
        <form onSubmit={e => this.addUser(e)}>
          <label>
            <p>Name:</p>
            <input value={this.state.inputValue} onChange={e => this.updateNameField(e)} />
          </label>
          <label>
            <p>Username:</p>
            <input value={this.state.inputValue} onChange={e => this.updateUsernameField(e)} />
          </label>
          <label>
            <p>E-mail:</p>
            <input value={this.state.inputValue} onChange={e => this.updateEmailField(e)} />
          </label>
        </form>
        <button onClick={e => this.addUser(e)}>Add user</button>
        <button onClick={this.removeUser}>Remove user</button>
      </div>
    );
  }
}

EditUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired
}

export default withHttpRequests(EditUser);
