import React, { useState } from 'react';
import { Layout } from 'antd';

import { SubscriptionDataType as DataType } from '../../types/DataType';
import SubscriptionActionBar from './SubscriptionActionBar';
import SubscriptionTable from './SubscriptionTable';
import Section from '../../layouts/Section';
import classes from './SubscriptionSection.module.scss';

const SubscriptionSection: React.FC = () => {
    const [subscription, setSubscription] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setSubscription([record]);
    };

    const routs = [
        {
            path: '/subscriptions',
            title: 'Абонементы',
            component: 
                <>
                    <SubscriptionActionBar selectedItem={subscription[0] ? true : false} />
                    <SubscriptionTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/subscriptions',
            title: 'Новый абонемент',
            component: <div>Новый абонемент</div>,
        },
        {
            path: '/subscriptions',
            title: 'Изменить абонемент',
            component: <div>Изменить абонемент</div>,
        },
        {
            path: '/subscriptions',
            title: 'Удалить абонемент',
            component: <div>Удалить абонемент</div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default SubscriptionSection;
