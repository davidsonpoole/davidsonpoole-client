import { colors, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';

const theme = createTheme ({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiNavbar/>
        <div id='detail'>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
