import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import LoginPage from './pages/loginPage';
import DataConfig from './pages/datanextconfig';
import * as Toster from './helpers/tosterService'
import { PrivateRoute } from './helpers/checkAuth'


export default class Routeing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router basename="/tracking">
        <div>
          {Toster.Toster()}
          <Route exact path='/' component={LoginPage} />
          <PrivateRoute path="/trackingconfig" component={DataConfig} />
        </div>
      </Router>
    )
  }
}
