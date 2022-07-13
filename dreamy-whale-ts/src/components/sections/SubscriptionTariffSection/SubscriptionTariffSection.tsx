import React, { useState } from 'react';

import { SubscriptionTariffDataType as DataType } from '../../types/DataType';
import SubscriptionTariffActionBar from './SubscriptionTariffActionBar';
import SubscriptionTariffTable from './SubscriptionTariffTable';
import Section from '../../layouts/Section';
import classes from './SubscriptionTariffSection.module.scss';

const SubscriptionTariffSection: React.FC = () => {
    const [subscriptionTariff, setSubscriptionTariff] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setSubscriptionTariff([record]);
    };

    const routs = [
        {
            path: '/tariff/subscription',
            title: 'Стоимость абонементов',
            component: 
                <>
                    <SubscriptionTariffActionBar selectedItem={subscriptionTariff[0] ? true : false} />
                    <SubscriptionTariffTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/tariff/subscription/new',
            title: 'Новый абонемент',
            component: <div></div>,
        },
        {
            path: '/tariff/subscription/edit',
            title: 'Изменить абонемент',
            component: <div></div>,
        },
        {
            path: '/tariff/subscription/delete',
            title: 'Удалить абонемент',
            component: <div></div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default SubscriptionTariffSection;
