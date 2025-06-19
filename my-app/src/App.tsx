import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingCard from './components/GreetingCard';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList names={["ilay","atia","three"]}></UserList>
      </header>
    </div>
  );
}

export default App;
