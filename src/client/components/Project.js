import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Outlet} from "react-router-dom";


export default function Project() {


    return (
        <React.Fragment>
            <Typography variant="h4" component="h1" gutterBottom>
                Project
            </Typography>
            <Outlet/>
        </React.Fragment>
    );
}



