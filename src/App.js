import React from 'react';
import User from './User'
import './App.css';
import HomeContainer from './containers/Homecontainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
