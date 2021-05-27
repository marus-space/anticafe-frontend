import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import VisitForm from '../VisitSection/VisitForm';
import AccountingEntryForm from '../AccountingEntrySection/AccountingEntryForm';
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
                <Switch>
                    <Route exact path="/clients">
                        <Header title="Клиенты" />
                        <Content className={classes.content}>
                            <ClientActionBar selectedRowKeys={this.state.selectedRowKeys} />
                            <ClientTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                        </Content>
                    </Route>
                    <Route exact path="/clients/new_visit">
                        <Header title="Новое посещение" />
                        <Content className={classes.content}>
                            <VisitForm />
                        </Content>
                    </Route>
                    <Route exact path="/clients/new_accounting_entry">
                        <Header title="Новое пополнение" />
                        <Content className={classes.content}>
                            <AccountingEntryForm />
                        </Content>
                    </Route>
                </Switch>
            </div>
        );
    }
}
    
export default ClientSection;
