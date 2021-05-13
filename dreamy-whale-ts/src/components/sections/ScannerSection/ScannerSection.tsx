import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ScannerActionBar from './ScannerActionBar';
import ScannerTable from './ScannerTable';
import classes from './ScannerSection.module.scss';

const { Content } = Layout;

type ScannerSectionProps = {};

const ScannerSection: React.FC<ScannerSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Записи со сканера" />
        <Content className={classes.content}>
            <ScannerActionBar />
            <ScannerTable />
        </Content>
    </div>
);

export default ScannerSection;