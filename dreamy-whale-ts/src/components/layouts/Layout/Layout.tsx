import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../Sidebar';
import ClientsTable from '../../ClientsTable';
import ActionBar from '../../ActionBar';

import classes from './Layout.module.scss';

const { Header, Content } = Layout;

const ClientsLayout = () => (
  <div className={classes.component}>
    <Layout style={{minHeight: '100vh'}}>
    <Sidebar />
    <Layout className={classes.siteLayout}>
      <Header className={classes.siteLayoutBackground} style={{ padding: 0 }} />
      <Content className={classes.content}>
        <ActionBar />
        <ClientsTable />
      </Content>
    </Layout>
  </Layout>
  </div>
);

export default ClientsLayout;
