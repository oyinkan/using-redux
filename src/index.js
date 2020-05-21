import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'babel-core/polyfill';
import App from './components/App/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadUsers} from './actions/userActions';

const store = configureStore();
store.dispatch(loadUsers());

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
    document.getElementById('root')
);