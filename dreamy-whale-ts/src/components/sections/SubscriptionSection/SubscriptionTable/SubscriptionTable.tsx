import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './SubscriptionTable.module.scss';

type SubscriptionTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    client: string,
    subscription: string,
    start: Date,
    end: Date,
  };

const SubscriptionTable: React.FC<SubscriptionTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
    const [subscriptions, setSubscriptions] = useState<DataType[]>([]);

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
                rowKey="client_subscription_id"
                rowSelection={{
                    type: 'radio',
                    onChange: ((selectedRowKeys: React.Key[], selectedRows: DataType[]) => onSelect(selectedRowKeys)),
                    selectedRowKeys,
                }}
                size="small"
            />
        </div>
    );
};

export default SubscriptionTable;
