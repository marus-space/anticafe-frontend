import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import CostActionBar from './CostActionBar';
import CostTable from './CostTable';
import classes from './CostSection.module.scss';

const { Content } = Layout;

type CostSectionProps = {};

const CostSection: React.FC<CostSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Расходы" />
        <Content className={classes.content}>
            <CostActionBar />
            <CostTable />
        </Content>
    </div>
);

export default CostSection;