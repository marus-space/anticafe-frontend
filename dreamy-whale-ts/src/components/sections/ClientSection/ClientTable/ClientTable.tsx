import React, { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './ClientTable.module.scss';

type ClientTableProps = {};

const ClientTable: React.FC<ClientTableProps> = (props) => {
    const [clients, setClients] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/clients/")
        .then(response => setClients(response.data));
    }, []);

    const dataSource = clients;

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
            title: () => <span className={classes.alignCenter}>Отчество</span>,
            dataIndex: 'patronymic',
            key: 'patronymic',
            width: 110,
        },
        {
            title: () => <span className={classes.alignCenter}>Телефон</span>,
            dataIndex: 'phone',
            key: 'phone',
            width: 105,
        },
        {
            title: () => <span className={classes.alignCenter}>E-mail</span>,
            dataIndex: 'email',
            key: 'email',
            width: 140,
        },
        {
            title: () => <span className={classes.alignCenter}>Дата рождения</span>,
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment(date).format('DD.MM.YYYY')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Баланс (руб.)</span>,
            dataIndex: 'balance_rub',
            key: 'balance_rub',
            width: 90,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Баланс (мин.)</span>,
            dataIndex: 'balance_min',
            key: 'balance_min',
            width: 90,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Оплата минутами</span>,
            dataIndex: 'payment_min_status',
            key: 'payment_min_status',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
        {
            title: () => <span className={classes.alignCenter}>Бан</span>,
            dataIndex: 'ban_status',
            key: 'ban_status',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
        {
            title: () => <span className={classes.alignCenter}>Ссылка для друзей</span>,
            dataIndex: 'ref_link',
            key: 'ref_link',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
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

export default ClientTable;
