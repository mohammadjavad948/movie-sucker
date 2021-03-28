import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Main from "./Main";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

const dark = createMuiTheme({
    palette: {
        type: "dark"
    }
});


const light = createMuiTheme({
    palette: {
        type: "light"
    }
});

function App() {
  return (
      <ThemeProvider theme={dark}>
          <CssBaseline />
          <div>
              <Main />
              <Navigation />
          </div>
      </ThemeProvider>
  );
}

export default App;
