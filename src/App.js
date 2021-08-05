import React from "react";
import "./App.css";
import Country from "./Country";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Country />
          </Route>
          <Route path='/countryDetails/:id'>
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
