import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Main from "./Main";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
              <Main />
              <Navigation />
          </div>
      </ThemeProvider>
  );
}

export default App;
