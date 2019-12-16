import React from 'react';
import Links from './Links';
import Routes from './Routes';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App(){
  return(
    <Router>
      <Links/>
      <Routes/>
    </Router>
  );
}