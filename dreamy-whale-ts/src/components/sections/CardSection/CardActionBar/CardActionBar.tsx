import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './CardActionBar.module.scss';

type CardActionBarProps = {
    selectedItem: boolean,
};

const CardActionBar: React.FC<CardActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новая карта',
            alwaysEnabled: true,
            linkPath: '/cards',
        },
        {
            label: 'Изменить статус карты',
            alwaysEnabled: false,
            linkPath: '/cards',
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

export default CardActionBar;
