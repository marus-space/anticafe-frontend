import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import classes from './ClientSection.module.scss';

const { Content } = Layout;

const ClientSection = () => (
    <div className={classes.component}>
        <Header title="Клиенты" />
        <Content className={classes.content}>
            <ClientActionBar />
            <ClientTable />
        </Content>
    </div>
);

export default ClientSection;