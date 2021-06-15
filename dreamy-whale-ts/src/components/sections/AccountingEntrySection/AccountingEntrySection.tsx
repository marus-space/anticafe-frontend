import React, { useState } from 'react';

import { AccountingEntryDataType as DataType } from '../../types/DataType';
import AccountingEntryActionBar from './AccountingEntryActionBar';
import AccountingEntryTable from './AccountingEntryTable';
import Section from '../../layouts/Section';
import classes from './AccountingEntrySection.module.scss';

const AccountingEntrySection: React.FC = () => {
    const [accountingEntry, setAccountingEntry] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setAccountingEntry([record]);
    };

    const routs = [
        {
            path: '/accounting_entries',
            title: 'Проводки',
            component: 
                <>
                    <AccountingEntryActionBar selectedItem={accountingEntry[0] ? true : false} />
                    <AccountingEntryTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/accounting_entries',
            title: 'Новое пополнение',
            component: <div>Новое пополнение</div>,
        },
        {
            path: '/accounting_entries',
            title: 'Изменить пополнение',
            component: <div>Изменить пополнение</div>,
        },
        {
            path: '/accounting_entries',
            title: 'Удалить пополнение',
            component: <div>Удалить пополнение</div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default AccountingEntrySection;
