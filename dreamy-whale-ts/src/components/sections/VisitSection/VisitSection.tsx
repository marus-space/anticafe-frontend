import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import VisitActionBar from './VisitActionBar';
import VisitTable from './VisitTable';
import classes from './VisitSection.module.scss';

class VisitSection extends React.Component {
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
                <Header title="Посещения" />
                <Content className={classes.content}>
                    <VisitActionBar selectedRowKeys={this.state.selectedRowKeys} />
                    <VisitTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                </Content>
            </div>
        );
    }
}

export default VisitSection;
