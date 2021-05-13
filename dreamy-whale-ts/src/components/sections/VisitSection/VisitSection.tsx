import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import VisitActionBar from './VisitActionBar';
import VisitTable from './VisitTable';
import classes from './VisitSection.module.scss';

const { Content } = Layout;

type VisitSectionProps = {};

const VisitSection: React.FC<VisitSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Посещения" />
        <Content className={classes.content}>
            <VisitActionBar />
            <VisitTable />
        </Content>
    </div>
);

export default VisitSection;