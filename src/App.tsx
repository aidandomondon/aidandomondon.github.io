import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header';
import TabsContainer from './components/tabs';
import Container from '@mui/material/Container';
import About from './components/about';

function App() {

  const globalMuiTheme = createTheme({
    typography: {
      fontFamily: 'serif',
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <div className="App">
        <Container style={{marginTop: '5%'}}>
          <About></About>
          <TabsContainer></TabsContainer>
        </Container>
        <Header></Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
