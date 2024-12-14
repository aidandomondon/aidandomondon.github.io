import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Preface from './components/Preface';
import Stack from '@mui/material/Stack';
import TabView from './components/TabView';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/FooterWithImage';
import Header from './components/header/Header';
import IntroCard from './components/header/IntroCard';

// const background_image = require('./ai_ml.png');

function App() {

  const topLevelDivStyle = {
    // backgroundImage: `url(${background_image})`,
    // backgroundSize: 'cover'
  }

  const globalMuiTheme = createTheme({
    typography: {
      fontFamily: 'serif',
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <div className="App" style={topLevelDivStyle}>
        <Header showName={false}></Header>
        <IntroCard></IntroCard>
        {/* <header className="App-header">
          <Stack spacing={10}>
            <TopBar />
            <Preface />
            <TabView />
          </Stack>
        </header> */}
        <TabView />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
