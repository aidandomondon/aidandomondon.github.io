import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header';
import Container from '@mui/material/Container';
import Copyright from './components/copyright';
import Body from './components/body';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

function App() {

  const globalMuiTheme = createTheme({
    palette: {
      primary: {
        main: '#b6ef42ff', //'#631a1aff',
        dark: '#fff',
      },
      secondary: {
        main: '#42efb8ff',
        dark: '#B73910'
      },
      text: {
        primary: '#fff',
        secondary: '#b6ef42ff'
      }
    },
    typography: {
      fontFamily: 'sans-serif',
      body1: {
        fontSize: 30
      },
      body2: {
        fontSize: 18
      }
    }
  })

  return (
    <ThemeProvider theme={globalMuiTheme}>
      <CssBaseline />
      <Box className="App" sx={{ width: '100%', backgroundImage: `url(large-background.png)` }}>
        <Container sx={{ marginTop: '10%', marginBottom: '10%', width: '100%' }}>
          <Header />
          <Body />
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
