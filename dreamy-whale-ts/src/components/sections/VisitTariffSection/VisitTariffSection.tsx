import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import VisitTariffActionBar from './VisitTariffActionBar';
import VisitTariffTable from './VisitTariffTable';
import classes from './VisitTariffSection.module.scss';

const { Content } = Layout;

type VisitTariffSectionProps = {};

const VisitTariffSection: React.FC<VisitTariffSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Тарифы на посещения" />
        <Content className={classes.content}>
            <VisitTariffActionBar />
            <VisitTariffTable />
        </Content>
    </div>
);

export default VisitTariffSection;