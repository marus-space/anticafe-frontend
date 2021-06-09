import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './ReservationActionBar.module.scss';

type ReservationActionBarProps = {
    selectedItem: boolean,
};

const ReservationActionBar: React.FC<ReservationActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новая бронь',
            alwaysEnabled: true,
            linkPath: '/reservations',
        },
        {
            label: 'Изменить бронь',
            alwaysEnabled: false,
            linkPath: '/reservations',
        },
        {
            label: 'Удалить бронь',
            alwaysEnabled: false,
            linkPath: '/reservations',
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

export default ReservationActionBar;
