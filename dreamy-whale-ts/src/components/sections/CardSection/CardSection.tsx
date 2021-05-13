import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import CardActionBar from './CardActionBar';
import CardTable from './CardTable';
import classes from './CardSection.module.scss';

class CardSection extends React.Component {
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
                <Header title="Карты клиентов" />
                <Content className={classes.content}>
                    <CardActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <CardTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default CardSection;
