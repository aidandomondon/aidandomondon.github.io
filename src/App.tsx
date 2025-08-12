import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header';
import TabsContainer from './components/tabs';
import Container from '@mui/material/Container';
import About from './components/about';
import Copyright from './components/copyright';
import Body from './components/body';

function App() {

  const globalMuiTheme = createTheme({
    palette: {
      primary: {
        main: '#6F4953',
        dark: '#fff',
      },
      secondary: {
        main: '#B73910'
      },
      text: {
        primary: '#000',
        secondary: '#78848F'
      }
    },
    typography: {
      fontFamily: 'sans-serif',
      body1: {
        fontSize: 20
      },
      body2: {
        fontSize: 16
      }
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <div className="App" style={{ width: '100%' }}>
        <Container style={{ marginTop: '10%', marginBottom: '10%', width: '100%' }}>
          <Header />
          <Body />
          <Copyright />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
