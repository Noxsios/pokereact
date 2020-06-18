import React from 'react';
import './App.css';
import Search from './pokeComponents/search'
import { Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import SearchAppBar from './pokeComponents/SearchAppBar';

function App() {
  return (
    <div>
      {/* <SearchAppBar /> */}
    <Container maxWidth="sm">
      <Paper variant="outlined">
          <div style={{ display: 'flex', justifyContent: 'center' }}><Search /></div>
        {/* <PokeList /> */}
      </Paper>
      <Button variant="outlined" size="large" color="primary">
        &laquo; Previous 
        </Button>
        <Button id="button-next" variant="outlined" size="large" color="primary">
        Next &raquo;
        </Button>
    </Container>
    </div>
  );
}

export default App;
