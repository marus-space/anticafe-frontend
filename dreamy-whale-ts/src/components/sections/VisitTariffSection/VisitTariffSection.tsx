import React, { useState } from 'react';

import { VisitTariffDataType as DataType } from '../../types/DataType';
import VisitTariffActionBar from './VisitTariffActionBar';
import VisitTariffTable from './VisitTariffTable';
import Section from '../../layouts/Section';
import classes from './VisitTariffSection.module.scss';

const VisitTariffSection: React.FC = () => {
    const [visitTariff, setVisitTariff] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setVisitTariff([record]);
    };

    const routs = [
        {
            path: '/tariff/visit',
            title: 'Тарифы на посещения',
            component: 
                <>
                    <VisitTariffActionBar selectedItem={visitTariff[0] ? true : false} />
                    <VisitTariffTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/tariff/visit',
            title: 'Новый тариф',
            component: <div></div>,
        },
        {
            path: '/tariff/visit',
            title: 'Изменить тариф',
            component: <div></div>,
        },
        {
            path: '/tariff/visit',
            title: 'Удалить тариф',
            component: <div></div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default VisitTariffSection;
