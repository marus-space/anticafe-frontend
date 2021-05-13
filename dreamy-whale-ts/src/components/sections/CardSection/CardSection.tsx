import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import CardActionBar from './CardActionBar';
import CardTable from './CardTable';
import classes from './CardSection.module.scss';

const { Content } = Layout;

type CardSectionProps = {};

const CardSection: React.FC<CardSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Карты клиентов" />
        <Content className={classes.content}>
            <CardActionBar />
            <CardTable />
        </Content>
    </div>
);

export default CardSection;