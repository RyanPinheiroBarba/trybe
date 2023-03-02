import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

function App() {
  return (
    <div className="App">
      <Pokedex pokemonList={ pokemonList } />
    </div>
  );
}

export default App;
