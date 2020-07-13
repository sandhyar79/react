import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Users from './Users';
import Todo from './Pages/Todo';
import Profile from './Pages/Profile';
import Posts from './Pages/Posts';
import Photos from './Pages/Photos';
import Gallery from './Pages/Gallery';
import Comments from './Pages/Comments';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/profile"
            render={
              (props) => (
                <Profile {...props} />
              )
            }>
          </Route>
          <Route path="/posts"
            render={
              (props) =>
                <Posts {...props} />
            }>
          </Route>
          <Route path="/comments"
            render={
              (props) => <Comments {...props} />
            }>
          </Route>
          <Route path="/todo"
            render={
              (props) => <Todo {...props} />
            }>
          </Route>
          <Route path="/gallary"
            render={
              (props) => <Gallery {...props} />
            }>
          </Route>
          <Route path="/photos"
            render={
              (props) => <Photos {...props} />
            }>
          </Route>
          {/* <Route path="/changeProfile" render={
            (props) => <ChangeProfile {...props} />
          }></Route> */}
        </Switch>
      </Router>
    );
  }
}