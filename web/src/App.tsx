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
            type: 'dark',
            background: {
                default: '#0f0e17'
            },
            secondary: {
                main: '#ff8906',
                contrastText: '#fffffe'
            },
            primary: {
                main: '#e53170',
                contrastText: '#fffffe'
            },
        },
    });


    const light = createMuiTheme({
        palette: {
            type: 'light',
            background: {
                default: '#fffffe'
            },
            secondary: {
                main: '#ffd803',
                contrastText: '#2d334a'
            },
            primary: {
                main: '#bae8e8',
                contrastText: '#2d334a'
            }
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
