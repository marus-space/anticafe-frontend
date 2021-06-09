import React, { useState } from 'react';

import { ClientDataType as DataType } from '../../types/DataType';
import ClientActionBar from './ClientActionBar';
import ClientTable from './ClientTable';
import VisitForm from '../VisitSection/VisitForm';
import AccountingEntryForm from '../AccountingEntrySection/AccountingEntryForm';
import Section from '../../layouts/Section';
import classes from './ClientSection.module.scss';

const ClientSection: React.FC = () => {
    const [client, setClient] = useState<DataType[]>([]);

    const onClientSelect = (record: DataType) => {
        setClient([record]);
    };

    const routs = [
        {
            path: '/clients',
            title: 'Клиенты',
            component: 
                <>
                    <ClientActionBar selectedItem={client[0] ? true : false} />
                    <ClientTable onClientSelect={onClientSelect} />
                </>,
        },
        {
            path: '/clients/new_visit',
            title: 'Новое посещение',
            component: <VisitForm client={client[0]} />,
        },
        {
            path: '/clients/new_accounting_entry',
            title: 'Новое пополнение',
            component: <AccountingEntryForm client={client[0]} />,
        },
    ];

    return(<Section routs={routs}/>);
};
    
export default ClientSection;
