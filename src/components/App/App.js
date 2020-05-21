import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from '../Home/Home';
import UsersPage from '../Users/UsersPage';
import SingleUser from '../Users/SingleUser'; 


class App extends React.Component {
	render() {
		return(
			<div>
				<Router history={createBrowserHistory()}>
					<Route exact path="/" component={Home} /> 
			        <Route path="/users" component={UsersPage} />
			        <Route path="/users/:id" component={SingleUser} /> 
				</Router>
			</div>
		)
	}
}


export default App;