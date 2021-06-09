import React, { useState } from 'react';

import { ReservationTariffDataType as DataType } from '../../types/DataType';
import ReservationTariffActionBar from './ReservationTariffActionBar';
import ReservationTariffTable from './ReservationTariffTable';
import Section from '../../layouts/Section';
import classes from './ReservationTariffSection.module.scss';

const ReservationTariffSection: React.FC = () => {
    const [reservationTariff, setReservationTariff] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setReservationTariff([record]);
    };

    const routs = [
        {
            path: '/tariff/reservation',
            title: 'Тарифы на бронь и аренду',
            component: 
                <>
                    <ReservationTariffActionBar selectedItem={reservationTariff[0] ? true : false} />
                    <ReservationTariffTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/tariff/reservation',
            title: 'Новый тариф',
            component: <div>Изменить тариф</div>,
        },
        {
            path: '/tariff/reservation',
            title: 'Изменить тариф',
            component: <div>Изменить тариф</div>,
        },
        {
            path: '/tariff/reservation',
            title: 'Удалить тариф',
            component: <div>Удалить тариф</div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default ReservationTariffSection;
