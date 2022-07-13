import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './ScannerTable.module.scss';

const ScannerTable: React.FC = (props) => {
    const [scans, setScans] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/scanner/")
        .then(response => setScans(response.data));
    }, []);

    const dataSource = scans;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Номер карты</span>,
            dataIndex: 'card',
            key: 'card',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Тип сканера</span>,
            dataIndex: 'scanner_type',
            key: 'scanner_type',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Дата</span>,
            dataIndex: 'date',
            key: 'date',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('HH:mm DD.MM.YY')}</span>
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

export default ScannerTable;
