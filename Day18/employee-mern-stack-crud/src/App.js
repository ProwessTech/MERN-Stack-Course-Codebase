import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
