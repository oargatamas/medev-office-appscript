import * as React from 'react';
import {createRoot} from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './client/theme';
import App from "./client/components/App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);


root.render(
    <BrowserRouter window>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
