import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './VisitTariffActionBar.module.scss';

type VisitTariffActionBarProps = {
    selectedItem: boolean,
};

const VisitTariffActionBar: React.FC<VisitTariffActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новый тариф',
            alwaysEnabled: true,
            linkPath: '/tariff/visit',
        },
        {
            label: 'Изменить тариф',
            alwaysEnabled: false,
            linkPath: '/tariff/visit',
        },
        {
            label: 'Удалить тариф',
            alwaysEnabled: false,
            linkPath: '/tariff/visit',
        },
    ];

    return (
        <ActionBar
            selectedItem={selectedItem}
            searchPlaceholder="Тип карты"
            actions={actions}
        />
    );
};

export default VisitTariffActionBar;
