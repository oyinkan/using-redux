import React from 'react';
import {connect} from 'react-redux';

class SingleUser extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>Single User</h1>
        <div className="col-md-8 col-md-offset-2">
	        <h1>{this.props.user.name}</h1>
	        <p>email: {this.props.user.email}</p>
	        <p>phone: {this.props.user.email}</p>
	        <p>phone: {this.props.user.phone}</p>
	        <p>website: {this.props.user.website}</p>
	    </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let user = {name: '', email: '', phone: '', website: ''};
  const userId = ownProps.match.params.id;
  if (state.users.length > 0) {
    user = Object.assign({}, state.users.find(user => user.id === userId))
  } 

  return {user: user};
};


export default connect(mapStateToProps)(SingleUser);