import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './FormActionBar.module.scss';

type FormActionBarProps = {
    selectedItem: boolean,
};

const FormActionBar: React.FC<FormActionBarProps> = (props) => {
    const {selectedItem} = props;

    const actions = [
        {
            label: 'Обработать анкету',
            alwaysEnabled: false,
            linkPath: '/forms/process',
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

export default FormActionBar;
