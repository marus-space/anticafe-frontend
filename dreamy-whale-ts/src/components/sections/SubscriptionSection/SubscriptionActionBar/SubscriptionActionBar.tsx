import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './SubscriptionActionBar.module.scss';

type SubscriptionActionBarProps = {
    selectedItem: boolean,
};

const SubscriptionActionBar: React.FC<SubscriptionActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новый абонемент',
            alwaysEnabled: true,
            linkPath: '/subscriptions',
        },
        {
            label: 'Изменить абонемент',
            alwaysEnabled: false,
            linkPath: '/subscriptions',
        },
        {
            label: 'Удалить абонемент',
            alwaysEnabled: false,
            linkPath: '/subscriptions',
        }
    ];

    return (
        <ActionBar
            selectedItem={selectedItem}
            searchPlaceholder="Имя клиента"
            actions={actions}
        />
    );
};

export default SubscriptionActionBar;
