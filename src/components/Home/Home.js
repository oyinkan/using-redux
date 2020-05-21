import React from 'react';
import Header from "../Header/Header";


class Home extends React.Component {
  render() {
    return (
      <div>
	    <Header />
		<h1 style={{marginLeft: 25}}>Home</h1>
      </div>
    );
  }
}

export default Home;