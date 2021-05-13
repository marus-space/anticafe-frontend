import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ReservationActionBar from './ReservationActionBar';
import ReservationTable from './ReservationTable';
import classes from './ReservationSection.module.scss';

const { Content } = Layout;

type ReservationSectionProps = {};

const ReservationSection: React.FC<ReservationSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Брони и аренды" />
        <Content className={classes.content}>
            <ReservationActionBar />
            <ReservationTable />
        </Content>
    </div>
);

export default ReservationSection;