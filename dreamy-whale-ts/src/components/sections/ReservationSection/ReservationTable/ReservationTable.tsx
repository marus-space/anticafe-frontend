import React, { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import moment from 'moment'; 
import axios from 'axios';
import clsx from 'clsx';

import { ReservationDataType as DataType } from '../../../types/DataType';
import classes from './ReservationTable.module.scss';

type ReservationTableProps = {
    onSelectItem: (record: DataType) => void,
};

const ReservationTable: React.FC<ReservationTableProps> = (props) => {
    const { onSelectItem } = props;
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
            render: (value: boolean) => <Checkbox checked={value} className={clsx(classes.alignCenter, classes.checkBox)} />
        },
        {
            title: () => <span className={classes.alignCenter}>Школьник</span>,
            dataIndex: 'schoolboy',
            key: 'schoolboy',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={clsx(classes.alignCenter, classes.checkBox)} />
        },
        {
            title: () => <span className={classes.alignCenter}>Студент</span>,
            dataIndex: 'student',
            key: 'student',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={clsx(classes.alignCenter, classes.checkBox)} />
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

export default ReservationTable;
