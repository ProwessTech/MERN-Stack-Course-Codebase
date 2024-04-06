import React, { Fragment, useRef } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const focusDiv = useRef(null);

  const onClickHandler = () => {

    focusDiv.current.value = "Today is a very nice day!";
    focusDiv.current.focus();
  }


  return (

   

    <div className="App">
      <div className="App-header">
        <Fragment>
          <div>
            
            <label>Please click on the button to focus into the Text Area</label>
            <br/>
            <button onClick={onClickHandler}>
              Click to Focus
            </button>
            <br/>
            <br/>
          </div>
          <textarea ref={focusDiv} />
        </Fragment>
      </div>
    </div>
  );
}

export default App;
