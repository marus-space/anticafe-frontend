import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import classes from './ReservationTariffTable.module.scss';

type ReservationTariffTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    reservation_object: string,
    min_num_of_persons: number,
    max_num_of_persons: number,
    one_time_cost: number,
    cost_per_hour: number,
  };

const ReservationTariffTable: React.FC<ReservationTariffTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
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
                    onChange: ((selectedRowKeys: React.Key[], selectedRows: DataType[]) => onSelect(selectedRowKeys)),
                    selectedRowKeys,
                }}
                size="small"
                pagination={{ pageSize: 20 }}
            />
        </div>
    );
};

export default ReservationTariffTable;
