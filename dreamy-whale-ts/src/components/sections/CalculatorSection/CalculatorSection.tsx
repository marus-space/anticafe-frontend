import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import CalculatorForm from './CalculatorForm';
import classes from './CalculatorSection.module.scss';

class CalculatorSection extends React.Component {
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
                <Header title="Калькулятор стоимости посещений" />
                <Content className={classes.content}>
                    <CalculatorForm />
                </Content>
            </div>
        );
    }
}

export default CalculatorSection;
