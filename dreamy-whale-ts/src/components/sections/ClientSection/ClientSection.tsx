import React, { useState } from 'react';

import { ClientDataType as DataType } from '../../types/DataType';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import VisitForm from '../VisitSection/VisitForm';
import SubscriptionForm from '../SubscriptionSection/SubscriptionForm';
import AccountingEntryForm from '../AccountingEntrySection/AccountingEntryForm';
import ClientForm from './ClientForm';
import Section from '../../layouts/Section';
import classes from './ClientSection.module.scss';

const ClientSection: React.FC = () => {
    const [client, setClient] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setClient([record]);
    };

    const routs = [
        {
            path: '/clients',
            title: 'Клиенты',
            component: 
                <>
                    <ClientActionBar selectedItem={client[0] ? true : false} />
                    <ClientTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/clients/new_visit',
            title: 'Новое посещение',
            component: <VisitForm client={client[0]} method="POST" />,
        },
        {
            path: '/clients/new_subscription',
            title: 'Новый абонемент',
            component: <SubscriptionForm client={client[0]} />,
        },
        {
            path: '/clients/new_accounting_entry',
            title: 'Новое пополнение',
            component: <AccountingEntryForm client={client[0]} />,
        },
        {
            path: '/clients/edit',
            title: 'Изменить данные клиента',
            component: <ClientForm client={client[0]} />,
        },

    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};
    
export default ClientSection;
