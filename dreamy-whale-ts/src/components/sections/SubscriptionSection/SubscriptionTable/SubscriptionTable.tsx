import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './SubscriptionTable.module.scss';

type SubscriptionTableProps = {};

const SubscriptionTable: React.FC<SubscriptionTableProps> = (props) => {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/client_subscriptions/")
        .then(response => setSubscriptions(response.data));
    }, []);

    const dataSource = subscriptions;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Клиент</span>,
            dataIndex: 'client',
            key: 'client',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Абонемент</span>,
            dataIndex: 'subscription',
            key: 'subscription',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text} абонемент</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Начало действия абонемента</span>,
            dataIndex: 'start',
            key: 'start',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('HH:mm DD.MM.YY')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Окончание действия абонемента</span>,
            dataIndex: 'end',
            key: 'end',
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

export default SubscriptionTable;
