import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import paths from '../../paths';
import classes from './App.module.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className={classes.component}>
      <Switch>
        <Route exact path={paths} component={MainPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
