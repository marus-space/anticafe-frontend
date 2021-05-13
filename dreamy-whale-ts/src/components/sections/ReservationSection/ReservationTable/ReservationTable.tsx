import React, { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import moment from 'moment'; 
import axios from 'axios';

import classes from './ReservationTable.module.scss';

type ReservationTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    client: string,
    last_name: string,
    first_name: string,
    phone: number,
    reservation_object: string,
    start: Date,
    end: Date,
    client_card: boolean,
    schoolboy: boolean,
    student: boolean,
    num_of_persons: number,
    preliminary_cost: number,
    comment: string,
}

const ReservationTable: React.FC<ReservationTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
    const [reservations, setReservations] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/reservations/")
        .then(response => setReservations(response.data));
    }, []);

    const dataSource = reservations;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Фамилия</span>,
            dataIndex: 'last_name',
            key: 'last_name',
            width: 110,
        },
        {
            title: () => <span className={classes.alignCenter}>Имя</span>,
            dataIndex: 'first_name',
            key: 'first_name',
            width: 110,
        },
        {
            title: () => <span className={classes.alignCenter}>Телефон</span>,
            dataIndex: 'phone',
            key: 'phone',
            width: 105,
        },
        {
            title: () => <span className={classes.alignCenter}>Объект брони</span>,
            dataIndex: 'reservation_object',
            key: 'reservation_object',
            width: 110,
            render: (text: number) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Начало брони</span>,
            dataIndex: 'start',
            key: 'start',
            width: 90,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('DD.MM.YY HH:mm')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Окончание брони</span>,
            dataIndex: 'end',
            key: 'end',
            width: 90,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('DD.MM.YY HH:mm')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Клубная карта</span>,
            dataIndex: 'client_card',
            key: 'client_card',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
        {
            title: () => <span className={classes.alignCenter}>Школьник</span>,
            dataIndex: 'schoolboy',
            key: 'schoolboy',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
        {
            title: () => <span className={classes.alignCenter}>Студент</span>,
            dataIndex: 'student',
            key: 'student',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
        {
            title: () => <span className={classes.alignCenter}>Кол-во человек</span>,
            dataIndex: 'num_of_persons',
            key: 'num_of_persons',
            width: 80,
            render: (text: number) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Сумма</span>,
            dataIndex: 'preliminary_cost',
            key: 'preliminary_cost',
            width: 100,
            render: (text: number) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Комментарий</span>,
            dataIndex: 'comment',
            key: 'comment',
            width: 140,
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="reservation_id"
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

export default ReservationTable;
