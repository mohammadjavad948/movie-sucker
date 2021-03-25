import React from 'react';
import './App.css';
import NavBar from "./components/navbar";
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
              <NavBar />
              <Main />
          </div>
      </ThemeProvider>
  );
}

export default App;
