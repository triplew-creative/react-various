
import React from 'react';
import './App.css';
import Header from './components/Header';
import Router from './pages/router.tsx';
import { Grid, Container } from '@mui/material';

function App() {


  return (
  
      <div className="App">
      <Header />
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={12}>
        
        </Grid>
      <Router />
      </Container>
    </div>
  
  );
}

export default App;
