import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import AccountingEntryActionBar from './AccountingEntryActionBar';
import AccountingEntryTable from './AccountingEntryTable';
import classes from './AccountingEntrySection.module.scss';

class AccountingEntrySection extends React.Component {
    state = {
        selectedRowKeys: [],
    };
    
    onSelect = (selectedRowKeys: React.Key[]) => {
        this.setState({ selectedRowKeys });
        console.log(this.state.selectedRowKeys);
    };
    
    render () {
        const { Content } = Layout;
        return (
            <div className={classes.component} onClick={() => this.onSelect([])}>
                <Header title="Проводки" />
                <Content className={classes.content}>
                    <AccountingEntryActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <AccountingEntryTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    };
};

export default AccountingEntrySection;