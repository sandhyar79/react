import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './Data/HandleError/ErrorBoundary';
ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root')
);