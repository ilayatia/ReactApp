import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingCard from './components/GreetingCard';
import UserList from './components/UserList';
import CostomButton from './components/CostomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CostomButton label='heyman' color='green'></CostomButton>
      </header>
    </div>
  );
}

export default App;
