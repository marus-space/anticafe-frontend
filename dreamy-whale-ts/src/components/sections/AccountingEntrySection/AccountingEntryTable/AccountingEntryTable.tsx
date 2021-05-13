import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './AccountingEntryTable.module.scss';

type AccountingEntryTableProps = {};

const AccountingEntryTable: React.FC<AccountingEntryTableProps> = (props) => {
    const [accountingEntries, setAccountingEntrys] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/accounting_entries/")
        .then(response => setAccountingEntrys(response.data));
    }, []);

    const dataSource = accountingEntries;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Клиент</span>,
            dataIndex: 'client',
            key: 'client',
            width: 80,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Тип проводки</span>,
            dataIndex: 'accounting_entry_type',
            key: 'accounting_entry_type',
            width: 120,
        },
        {
            title: () => <span className={classes.alignCenter}>Дата</span>,
            dataIndex: 'date',
            key: 'date',
            width: 80,
            render: (date: Date) => <span className={classes.alignCenter}>{moment(date).format('HH:mm DD.MM.YY')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Сумма (руб.)</span>,
            dataIndex: 'cost_rub',
            key: 'cost_rub',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Сумма (мин.)</span>,
            dataIndex: 'cost_min',
            key: 'cost_min',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size="small"
            />
        </div>
    );
};

export default AccountingEntryTable;
