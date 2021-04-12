import React from 'react';

import ClientsTable from '../layouts/ClientsTable';
import classes from './App.module.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className={classes.component}>
      <ClientsTable />      
    </div>
  );
}

export default App;
