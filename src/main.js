import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Exercise2 from './pages/Exercise2';
import Exercise1 from './pages/Exercise1';

function App() {
  return (
    <Router>
      <div>
        <h1>Exercises</h1>
        <Link to="/exercise1">Exercise1</Link>
        <div>
          <Link to="/exercise2">Exercise2</Link>
        </div>
        <Switch>
          <Route path="/exercise1">
            <Exercise1 />
          </Route>
          <Route path="/exercise2">
            <Exercise2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
render(<App />, document.getElementById('root'));
