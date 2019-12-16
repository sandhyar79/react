import React, {Suspense, lazy} from 'react';
//import Users from './Data/Users';
//import Posts from './Data/Posts';
//import Comments from './Data/Comments';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './Data/error/ErrorBoundary';
//import Todos from './Data/Todos';
const Users = lazy(() => import('./Data/Users'));
const Todos = lazy(() => import('./Data/Todos'));
const Posts = lazy(() => import('./Data/Posts'));
const Comments = lazy(() => import('./Data/Comments'));
export default function Routes() {
    return (
        <div className="routes">
            <Suspense fallback = {<ErrorBoundary><div><h4>Loading the Content...Please Wait...!</h4></div></ErrorBoundary>}>
                <Switch>
                    <Route path="/" exact>
                        <ErrorBoundary>
                            <Users />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/users">
                        <ErrorBoundary>
                            <Users />
                        </ErrorBoundary>
                    </Route>
                    <Route path="/todos" render={
                        (props) => (<ErrorBoundary>
                                        <Todos {...props} />
                                    </ErrorBoundary>)
                    }>
                    </Route>
                    <Route path="/posts" render={
                        (props) => (<ErrorBoundary>
                                        <Posts {...props} />
                                    </ErrorBoundary>)
                    }>
                    </Route>
                    <Route path="/comments" render={
                        (props) => (<ErrorBoundary>
                                        <Comments {...props} />
                                    </ErrorBoundary>)
                    }>

                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}