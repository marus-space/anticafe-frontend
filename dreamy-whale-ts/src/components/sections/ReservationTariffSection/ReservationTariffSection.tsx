import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ReservationTariffActionBar from './ReservationTariffActionBar';
import ReservationTariffTable from './ReservationTariffTable';
import classes from './ReservationTariffSection.module.scss';

class ReservationTariffSection extends React.Component {
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
                <Header title="Тарифы на бронь и аренду"/>
                <Content className={classes.content}>
                    <ReservationTariffActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <ReservationTariffTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default ReservationTariffSection;
