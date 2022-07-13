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
            linkPath: '/subscriptions/new',
        },
        {
            label: 'Изменить абонемент',
            alwaysEnabled: false,
            linkPath: '/subscriptions/edit',
        },
        {
            label: 'Удалить абонемент',
            alwaysEnabled: false,
            linkPath: '/subscriptions/delete',
        }
    ];

    return (
        <div className={classes.component}>
            <ActionBar
                selectedItem={selectedItem}
                searchPlaceholder="Имя клиента"
                actions={actions}
            />
        </div>
    );
};

export default SubscriptionActionBar;
