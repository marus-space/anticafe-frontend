import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/Header';
import classes from './App.module.scss';

const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </div>
);

export default App;
