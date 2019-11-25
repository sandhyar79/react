import React from 'react';
import Links from './Links';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div className="routers">
        <Links />
        <Routes />
      </div>
    </Router>
  );
}