import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Preface from './Preface';
import Stack from '@mui/material/Stack';
import TabView from './TabView';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const background_image = require('./ai_ml.webp');

function App() {

  const topLevelDivStyle = {
    backgroundImage: `url(${background_image})`,
    backgroundSize: 'cover'
  }

  const globalMuiTheme = createTheme({
    typography: {
      fontFamily: 'serif',
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <div className="App" style={topLevelDivStyle}>
        <Stack spacing={10}>
          <TopBar />
          <Preface />
          <TabView />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
