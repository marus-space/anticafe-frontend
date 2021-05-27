import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import FormActionBar from './FormActionBar';
import FormTable from './FormTable';
import FormForm from './FormForm';
import classes from './FormSection.module.scss';

class FormSection extends React.Component {
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
                <Switch>
                    <Route exact path="/forms">
                        <Header title="Анкеты для оформления клубной карты" />
                        <Content className={classes.content}>
                            <FormActionBar selectedRowKeys={this.state.selectedRowKeys} />
                            <FormTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                        </Content>
                    </Route>
                    <Route exact path="/forms/process">
                        <Header title="Обработка анкеты" />
                        <Content className={classes.content}>
                            <FormForm />
                        </Content>
                    </Route>
                </Switch>
                
            </div>
        );
    }
}

export default FormSection;
