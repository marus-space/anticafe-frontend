import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import VisitTariffActionBar from './VisitTariffActionBar';
import VisitTariffTable from './VisitTariffTable';
import classes from './VisitTariffSection.module.scss';

class VisitTariffSection extends React.Component {
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
                <Header title="Тарифы на посещения" />
                <Content className={classes.content}>
                    <VisitTariffActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <VisitTariffTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default VisitTariffSection;
