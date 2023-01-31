import * as React from 'react';
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/projects/2">Project</Link></li>
                <li><Link to="/projects/2/effort-sheet">EffortSheet</Link></li>
            </ul>
        </>
    );
}



