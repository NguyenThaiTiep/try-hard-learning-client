import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
require('dotenv').config();

function App() {
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{process.env.REACT_APP_NAME}</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
