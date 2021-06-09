import React, { useState } from 'react';

import { ReservationDataType as DataType } from '../../types/DataType';
import ReservationActionBar from './ReservationActionBar';
import ReservationTable from './ReservationTable';
import ReservationForm from './ReservationForm';
import Section from '../../layouts/Section';
import classes from './ReservationSection.module.scss';

const ReservationSection: React.FC = () => {
    const [reservation, setReservation] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setReservation([record]);
    };

    const routs = [
        {
            path: '/reservations',
            title: 'Брони и аренды',
            component: 
                <>
                    <ReservationActionBar selectedItem={reservation[0] ? true : false} />
                    <ReservationTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/reservations',
            title: 'Новая бронь',
            component: <ReservationForm />,
        },
        {
            path: '/reservations',
            title: 'Изменить бронь',
            component: <div>Изменить бронь</div>,
        },
        {
            path: '/reservations',
            title: 'Удалить бронь',
            component: <div>Удалить бронь</div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default ReservationSection;
