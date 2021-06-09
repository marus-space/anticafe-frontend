import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import { AccountingEntryDataType as DataType } from '../../../types/DataType';
import classes from './AccountingEntryTable.module.scss';

type AccountingEntryTableProps = {
    onAccountingEntrySelect: (record: DataType) => void,
};

const AccountingEntryTable: React.FC<AccountingEntryTableProps> = (props) => {
    const { onAccountingEntrySelect } = props;
    const [accountingEntries, setAccountingEntrys] = useState<DataType[]>([]);

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
            width: 140,
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
                rowKey="accounting_entry_id"
                rowSelection={{
                    type: 'radio',
                    onSelect: (record) => {
                        onAccountingEntrySelect(record);
                        console.log(record);
                    },
                }}
                size="small"
            />
        </div>
    );
};

export default AccountingEntryTable;
