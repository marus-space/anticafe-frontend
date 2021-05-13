import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import SubscriptionActionBar from './SubscriptionActionBar';
import SubscriptionTable from './SubscriptionTable';
import classes from './SubscriptionSection.module.scss';

class SubscriptionSection extends React.Component {
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
                <Header title="Абонементы" />
                <Content className={classes.content}>
                    <SubscriptionActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <SubscriptionTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default SubscriptionSection;
