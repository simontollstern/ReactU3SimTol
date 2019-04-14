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

  // Updates the nameField state with the value from the 'nameField' input
  updateNameField = (e) => {
    this.setState({ nameField: e.target.value });
  }

  // Updates the usernameField state with the value from the 'usernameField' input
  updateUsernameField = (e) => {
    this.setState({ usernameField: e.target.value });
  }

  // Updates the emailField state with the value from the 'emailField' input
  updateEmailField = (e) => {
    this.setState({ emailField: e.target.value });
  }

  // Runs the fetch function from withHttpRequests that adds a user (with data
  // from the input fields). Then sends an event to Dashboard which tells it
  // to update the list.
  // Also clears the fields
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
      this.setState({ nameField: '', usernameField: '', emailField: '' });
      this.props.addUser(newUser)
      .then(() => {
        this.props.onAddUser();
      });
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
            <input value={this.state.nameField} onChange={e => this.updateNameField(e)} />
          </label>
          <label>
            <p>Username:</p>
            <input value={this.state.usernameField} onChange={e => this.updateUsernameField(e)} />
          </label>
          <label>
            <p>E-mail:</p>
            <input value={this.state.emailField} onChange={e => this.updateEmailField(e)} />
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
