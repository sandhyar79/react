import React from 'react';
import {BrowserRouter as Router,
    Link,
    Switch,
    Route} from 'react-router-dom';
import AddTodoList from './AddTodoList';
const Routers = () => {
    return(
        <div>
            <Router>    <Link to = "/add" exact>+</Link>          
                        <Switch>
                            <Route path = "/add" exact>
                            <AddTodoList/>
                            </Route>
                        </Switch>
                    </Router>
        </div>
    );
}
export default Routers;