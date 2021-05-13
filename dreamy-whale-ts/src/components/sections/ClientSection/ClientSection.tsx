import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import classes from './ClientSection.module.scss';

class ClientSection extends React.Component {
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
                <Header title="Клиенты" />
                <Content className={classes.content}>
                    <ClientActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <ClientTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}
    
export default ClientSection;
