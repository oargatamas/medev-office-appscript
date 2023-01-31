import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Button} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import EffortSheet from "./EffortSheet";
import Login from "./Login";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Project from "./Project";
import Navigation from "./Navigation";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function App() {
    const testClick = (event) => {
        alert("You have clicked the button");
        google.script.run
            .withSuccessHandler(response => console.log("API test call finished", response))
            .withFailureHandler(error => console.log("API test call failed: ", error))
            .testApi("RUN!");
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Navigation/>
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/projects/:projectId" element={<Project/>}/>
                    <Route path="/projects/:projectId/effort-sheet" element={<EffortSheet/>}/>
                </Routes>

                <Button onClick={testClick}>CLick me</Button>
                <Copyright/>
            </Box>
        </Container>
    );
}



