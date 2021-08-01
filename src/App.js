import React from 'react';
import Login from './pages/Loign/Login.js'
import ViewingEmployees from './pages/ViewingEmployees/ViewingEmployees.js'
import Management from './pages/Management/Management.js'
import Register from './pages/Register/Register.js'
import ErrorPage from './pages/ErrorPage.js'


import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        {/* <ul>    
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path="/home">
            <ViewingEmployees />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/management/:id">
            <Management />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
