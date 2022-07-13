import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './ReservationTariffActionBar.module.scss';

type ReservationTariffActionBarProps = {
    selectedItem: boolean,
};

const ReservationTariffActionBar: React.FC<ReservationTariffActionBarProps> = (props) => {
    const { selectedItem } = props;

    const actions = [
        {
            label: 'Новый тариф',
            alwaysEnabled: true,
            linkPath: '/tariff/reservation',
        },
        {
            label: 'Изменить тариф',
            alwaysEnabled: false,
            linkPath: '/tariff/reservation',
        },
        {
            label: 'Удалить тариф',
            alwaysEnabled: false,
            linkPath: '/tariff/reservation',
        },
    ];

    return (
        <div className={classes.component}>
            <ActionBar
                selectedItem={selectedItem}
                searchPlaceholder="Объект брони"
                actions={actions}
            />
        </div>
    );
};

export default ReservationTariffActionBar;
