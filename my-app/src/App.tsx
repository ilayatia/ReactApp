import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingCard from './components/GreetingCard';
import UserList from './components/UserList';
import CostomButton from './components/CostomButton';
import ProductCard from './components/ProductCard';
import photo from './components/zebra.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard name='zebra' price={66} imageUrl={photo}></ProductCard>
      </header>
    </div>
  );
}

export default App;
