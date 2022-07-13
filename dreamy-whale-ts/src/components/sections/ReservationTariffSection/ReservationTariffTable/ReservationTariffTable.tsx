import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import { ReservationTariffDataType as DataType } from '../../../types/DataType';
import classes from './ReservationTariffTable.module.scss';

type ReservationTariffTableProps = {
    onSelectItem: (record: DataType) => void,
};

const ReservationTariffTable: React.FC<ReservationTariffTableProps> = (props) => {
    const { onSelectItem } = props;
    const [reservationTariff, setReservationTariff] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/reservation_tariff/")
        .then(response => setReservationTariff(response.data));
    }, []);

    const dataSource = reservationTariff;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Объект брони</span>,
            dataIndex: 'reservation_object',
            key: 'reservation_object',
            width: 140,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Минимальное кол-во человек</span>,
            dataIndex: 'min_num_of_persons',
            key: 'min_num_of_persons',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Максимальное кол-во человек</span>,
            dataIndex: 'max_num_of_persons',
            key: 'max_num_of_persons',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость брони (руб.)</span>,
            dataIndex: 'one_time_cost',
            key: 'one_time_cost',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость аренды (руб./час)</span>,
            dataIndex: 'cost_per_hour',
            key: 'cost_per_hour',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
    ];

    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="reservation_tariff_id"
                rowSelection={{
                    type: 'radio',
                    onSelect: (record) => {                        
                        onSelectItem(record);
                        console.log(record);
                    },
                }}
                pagination={{ pageSize: 20 }}
            />
        </div>
    );
};

export default ReservationTariffTable;
