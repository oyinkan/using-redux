import React from 'react';
import {connect} from 'react-redux';
import Header from "../Header/Header";
import UsersList from './UsersList';

class UsersPage extends React.Component {
  render() {
    const users = this.props.users;
    return (
      <div>
        <Header />
        <h1 style={{marginLeft: 25}}>All Users</h1>
        <div>
          <UsersList users={users} />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
	  users: state.users
  };
} 
   
export default connect(mapStateToProps)(UsersPage);