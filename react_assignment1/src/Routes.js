import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Data/Home';
import Users from './Data/Users';
import Todos from './Data/Todos';
import Posts from './Data/Posts/Posts';
import Comments from './Data/Comments';
import ErrorBoundary from './Data/HandleError/ErrorBoundary';
export default function Routes() {
  return (
    <div className="switch">
      <Switch>
        <Route path="/" exact>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </Route>
        <Route path="/users">
          <ErrorBoundary>
            <Users />
          </ErrorBoundary>
        </Route>
        <Route path="/todos" render={
          (props) => (
            <ErrorBoundary>
              <Todos {...props} />
            </ErrorBoundary>
          )
        }>
        </Route>
        <Route path="/posts" render={
          (props) => (
            <ErrorBoundary>
              <Posts {...props} />
            </ErrorBoundary>
          )
        }>
        </Route>
        <Route path="/comments" render={
          (props) => (
            <ErrorBoundary>
              <Comments {...props} />
            </ErrorBoundary>
          )
        }>
        </Route>
      </Switch>
    </div>
  );
}