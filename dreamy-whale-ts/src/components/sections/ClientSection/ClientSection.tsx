import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import { ClientDataType as DataType } from '../../types/DataType';
import VisitForm from '../VisitSection/VisitForm';
import AccountingEntryForm from '../AccountingEntrySection/AccountingEntryForm';
import classes from './ClientSection.module.scss';

const { Content } = Layout;
const defaultClient: DataType = {
    key: 0,
    client_id: 0,
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: 0,
    email: '',
    date_of_birth: new Date('2021-01-01'),
    balance_rub: 0,
    balance_min: 0,
    payment_min_status: false,
    ban_status: false,
    ref_link: '',
};

const ClientSection: React.FC = () => {
    const [client, setClient] = useState(defaultClient);

    const onClientSelect = (record: DataType) => {
        setClient(record);
    };

    return(
        <div className={classes.component}>
            <Switch>
                <Route exact path="/clients">
                    <Header title="Клиенты" />
                    <Content className={classes.content}>
                        <ClientActionBar clientId={client.client_id} />
                        <ClientTable onClientSelect={onClientSelect} />
                    </Content>
                </Route>
                <Route exact path="/clients/new_visit">
                    <Header title="Новое посещение" />
                    <Content className={classes.content}>
                        <VisitForm client={client} />
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
};
    
export default ClientSection;
