import React, {createContext, useContext } from "react";

import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
   
      <ChildComponent />
  
      </header>
    </div>
  );
}

export default App;
