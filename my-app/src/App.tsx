import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingCard from './components/GreetingCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingCard name = "foo" message = "hola"></GreetingCard>
        <img src = {logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
