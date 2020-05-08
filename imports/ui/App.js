import React, { Component } from 'react';
import AddEntry from './AddEntry';
import ListEntry from './ListEntry';
import { withTracker } from 'meteor/react-meteor-data';
import { Entries } from "../api/entries";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class JournalApp extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">Journal</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/">View journal entries</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/add">Add journal entries</Link>
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <AddEntry />
          </Route>
          <Route path="/">
          <ListEntry {...this.props} />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  } 
}

function View() {
  return (
    <div>
      <ListEntry {...this.props} />
    </div>
  );
}

function Add() {
  return (
    <div>
      <AddEntry />
    </div>
  );
}

const App = withTracker(() => {
  return {
    entries: Entries.find({}). fetch()
  }
})(JournalApp);

export default App;