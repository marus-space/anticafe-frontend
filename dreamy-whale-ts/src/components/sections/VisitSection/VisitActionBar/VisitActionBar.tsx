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
            linkPath: '/visits/new',
        },
        {
            label: 'Изменить посещение',
            alwaysEnabled: false,
            linkPath: '/visits/edit/',
        },
        {
            label: 'Удалить посещение',
            alwaysEnabled: false,
            linkPath: '/visits/delete',
        },
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

export default VisitActionBar;
