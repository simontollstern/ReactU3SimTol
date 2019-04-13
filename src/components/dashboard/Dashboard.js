import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import UserList from '../userlist/UserList';
import User from '../user/User';
import EditUser from '../edituser/EditUser';
import withHttpRequests from '../withhttprequests/withHttpRequests';
import style from './Dashboard.module.css';

// Wrapper for everything and handles logic for users
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      colorToggled: false
    }
  }

  // Runs the fetch function from withHttpRequests that gets all users
  // and sets the state to the data that is returned
  getUsers = () => {
    this.props.getUsers()
    .then(res => res.json())
    .then(data => {
      this.setState({ users: data });
    });
  }

  componentDidMount(){
    this.getUsers();
  }

  // Toggle between 2 colors (true/false)
  toggleColor = () => {
    this.setState({ colorToggled: !this.state.colorToggled });
  }

  // Removes the last user from the array
  removeUser = () => {
    this.setState({ users: this.state.users.slice(0, this.state.users.length - 1)})
  }

  render(){
    return(
      <div className={style.dashboard}>
        <Card>
          <UserList onToggleColor={this.toggleColor} usersToggled={this.state.usersToggled}>
            {this.state.users.map((user, key) => {
              return <Link key={key} to={`/user/${user.id}`}><User name={user.name} colorToggled={this.state.colorToggled} /></Link>
            })}
          </UserList>
        </Card>
        <Card>
          <EditUser onAddUser={this.getUsers} onRemoveUser={this.removeUser} />
        </Card>
      </div>
    );
  }
}

export default withHttpRequests(Dashboard);
