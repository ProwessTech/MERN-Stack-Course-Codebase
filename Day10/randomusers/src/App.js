import logo from './logo.svg';
import './App.css';

function App() {

  const endPointURL = "https://randomuser.me/api/";

  const restAPICall = async ()=>{
    const response = await fetch(endPointURL);
    const jsonResponse = await response;
    console.log(jsonResponse);
  }

  restAPICall();

  return (
    <div className="App">
      <header className="App-header">
        <Color/>
     {/*   <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */ }



      </header>
    </div>
  );
}

export default App;
