import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
export default function Links(){
    return(
            <nav className = "navbar navbar-default" role = "navigation">
                <nav className = "nav navbar-nav">
                    <Link to = "/"> 
                        <div className = "links">Home</div>
                    </Link>
                {/* <Link to = "/users">Users</Link> */}
                </nav>
            </nav>
    );
}