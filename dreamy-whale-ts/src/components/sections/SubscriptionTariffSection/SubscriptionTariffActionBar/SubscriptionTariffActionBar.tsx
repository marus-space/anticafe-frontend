import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './SubscriptionTariffActionBar.module.scss';

type SubscriptionTariffActionBarProps = {
    selectedItem: boolean,
};

const SubscriptionTariffActionBar: React.FC<SubscriptionTariffActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новый абонемент',
            alwaysEnabled: true,
            linkPath: '/tariff/subscription',
        },
        {
            label: 'Изменить абонемент',
            alwaysEnabled: false,
            linkPath: '/tariff/subscription',
        },
        {
            label: 'Удалить абонемент',
            alwaysEnabled: false,
            linkPath: '/tariff/subscription',
        },
    ];

    return (
        <ActionBar
            selectedItem={selectedItem}
            searchPlaceholder="Абонемент"
            actions={actions}
        />
    );
};

export default SubscriptionTariffActionBar;
