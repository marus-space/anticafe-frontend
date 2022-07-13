import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { SubscriptionTariffDataType as DataType } from '../../../types/DataType';
import classes from './SubscriptionTariffTable.module.scss';

type SubscriptionTariffTableProps = {
    onSelectItem: (record: DataType) => void,
};

const SubscriptionTariffTable: React.FC<SubscriptionTariffTableProps> = (props) => {
    const { onSelectItem } = props;
    const [subscriptionTariff, setSubscriptionTariff] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/subscriptions/")
        .then(response => setSubscriptionTariff(response.data));
    }, []);

    const dataSource = subscriptionTariff;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Наименование</span>,
            dataIndex: 'name',
            key: 'name',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text} абонемент</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Начало действия</span>,
            dataIndex: 'start',
            key: 'start',
            width: 100,
            render: (time: string) => <span className={classes.alignCenter}>{time}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Окончание действия</span>,
            dataIndex: 'end',
            key: 'end',
            width: 100,
            render: (time: string) => <span className={classes.alignCenter}>{time}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Длительность</span>,
            dataIndex: 'duration',
            key: 'duration',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value} ч</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость (руб.)</span>,
            dataIndex: 'cost_rub',
            key: 'cost_rub',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="subscription_id"
                rowSelection={{
                    type: 'radio',
                    onSelect: (record) => {                        
                        onSelectItem(record);
                        console.log(record);
                    },
                }}
                size="small"
            />
        </div>
    );
};

export default SubscriptionTariffTable;
