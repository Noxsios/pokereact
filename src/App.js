import React from 'react';
import './App.css';
import Search from './pokeComponents/search'
// import PokeList from './pokeComponents/pokelist'
import {Container}  from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Search />
        {/* <PokeList /> */}
      </Container>
    </div>
  );
}

export default App;
