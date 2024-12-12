import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Preface from './Preface';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Stack spacing={0}>
            <TopBar/>
            <Preface />
          </Stack>
      </header>
    </div>
  );
}

export default App;
