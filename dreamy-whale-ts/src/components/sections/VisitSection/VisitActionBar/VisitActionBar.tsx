import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './VisitActionBar.module.scss';

type VisitActionBarProps = {
    selectedItem: boolean,
};

const VisitActionBar: React.FC<VisitActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новое посещение',
            alwaysEnabled: true,
            linkPath: '/visits',
        },
        {
            label: 'Изменить посещение',
            alwaysEnabled: false,
            linkPath: '/visits',
        },
        {
            label: 'Удалить посещение',
            alwaysEnabled: false,
            linkPath: '/visits',
        },
    ];
    
    return (
        <ActionBar
            selectedItem={selectedItem}
            searchPlaceholder="Имя клиента"
            actions={actions}
        />
    );
};

export default VisitActionBar;
