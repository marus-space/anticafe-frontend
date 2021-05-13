import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import SubscriptionActionBar from './SubscriptionActionBar';
import SubscriptionTable from './SubscriptionTable';
import classes from './SubscriptionSection.module.scss';

const { Content } = Layout;

type SubscriptionSectionProps = {};

const SubscriptionSection: React.FC<SubscriptionSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Абонементы" />
        <Content className={classes.content}>
            <SubscriptionActionBar />
            <SubscriptionTable />
        </Content>
    </div>
);

export default SubscriptionSection;