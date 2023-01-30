import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Button} from "@mui/material";

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
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App example
                </Typography>
                <Button onClick={testClick}>CLick me</Button>
                <Copyright />
            </Box>
        </Container>
    );
}



