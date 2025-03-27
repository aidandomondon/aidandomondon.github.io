import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Preface from './Preface';
import Stack from '@mui/material/Stack';
import TabView from './TabView';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card } from '@mui/material';

const background_image = require('./ai_ml.webp');

function App() {

  const globalMuiTheme = createTheme({
    typography: {
      fontFamily: 'serif',
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <div className="App">
        <Stack spacing={10}>
          <TopBar />
          <Preface />
          <div style={{boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.5)"}}>
            <TabView />
          </div>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
