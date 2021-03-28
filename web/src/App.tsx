import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Main from "./Main";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import {useThemeStore} from "./stores/ThemeStore";


function App() {

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

    const {theme} = useThemeStore();

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <CssBaseline/>
            <div>
                <Main/>
                <Navigation/>
            </div>
        </ThemeProvider>
    );
}

export default App;
