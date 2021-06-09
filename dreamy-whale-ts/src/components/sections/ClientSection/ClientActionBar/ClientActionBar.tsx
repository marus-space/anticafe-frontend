import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './ClientActionBar.module.scss';

type ClientActionBarProps = {
    selectedItem: boolean,
};

const ClientActionBar: React.FC<ClientActionBarProps> = (props) => {
    const {selectedItem} = props;

    const actions = [
        {
            label: 'Новое посещение',
            alwaysEnabled: false,
            linkPath: '/clients/new_visit',
        },
        {
            label: 'Новый абонемент',
            alwaysEnabled: false,
            linkPath: '/clients',
        },
        {
            label: 'Новое пополнение',
            alwaysEnabled: false,
            linkPath: '/clients/new_accounting_entry',
        },
        {
            label: 'Изменить данные',
            alwaysEnabled: false,
            linkPath: '/clients',
        },
    ];

    return (
        <ActionBar
            selectedItem={selectedItem}
            searchPlaceholder="Имя или номер телефона"
            actions={actions}
        />
    );
};

export default ClientActionBar;
