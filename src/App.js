import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from './Form';
import {Productenlijst} from './Productenlijst';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Productenlijst/>
      </header>
    </div>
  );
}

export default App;
