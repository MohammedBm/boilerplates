import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import createHitsory from 'history/createBrowserHistory'
import PrivteRoute from './PrivteRoute'
import PublicRoute from './PublicRoute'

export const history = createHitsory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivteRoute path='/dashboard' component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter