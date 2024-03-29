import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './AccountingEntryActionBar.module.scss';

type AccountingEntryActionBarProps = {
    selectedItem: boolean,
};

const AccountingEntryActionBar: React.FC<AccountingEntryActionBarProps> = (props) => {
    const { selectedItem } = props;
    
    const actions = [
        {
            label: 'Новое пополнение',
            alwaysEnabled: true,
            linkPath: '/accounting_entries',
        },
        {
            label: 'Изменить пополнение',
            alwaysEnabled: false,
            linkPath: '/accounting_entries',
        },
        {
            label: 'Удалить пополнение',
            alwaysEnabled: false,
            linkPath: '/accounting_entries',
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

export default AccountingEntryActionBar;
