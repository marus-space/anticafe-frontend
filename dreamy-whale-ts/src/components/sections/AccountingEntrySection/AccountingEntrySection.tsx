import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import AccountingEntryActionBar from './AccountingEntryActionBar';
import AccountingEntryTable from './AccountingEntryTable';
import classes from './AccountingEntrySection.module.scss';

const { Content } = Layout;

type AccountingEntrySectionProps = {};

const AccountingEntrySection: React.FC<AccountingEntrySectionProps> = () => (
    <div className={classes.component}>
        <Header title="Проводки" />
        <Content className={classes.content}>
            <AccountingEntryActionBar />
            <AccountingEntryTable />
        </Content>
    </div>
);

export default AccountingEntrySection;