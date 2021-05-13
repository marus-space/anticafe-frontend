import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import SubscriptionTariffActionBar from './SubscriptionTariffActionBar';
import SubscriptionTariffTable from './SubscriptionTariffTable';
import classes from './SubscriptionTariffSection.module.scss';

class SubscriptionTariffSection extends React.Component {
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
                <Header title="Стоимость абонементов" />
                <Content className={classes.content}>
                    <SubscriptionTariffActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <SubscriptionTariffTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default SubscriptionTariffSection;
