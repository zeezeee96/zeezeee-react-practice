import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Datafetch from './Datafetch';
import TodoList from './TodoList';

 function Routingapp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">TodoList</Link>
            </li>
            <li>
              <Link to="/datafetch">Datafetch</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/datafetch">
            <Datafetch />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>This is the routing app. Switching two apps</h2>;
}
export default Routingapp;