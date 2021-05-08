import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import classes from './ClientsTable.module.scss';

type ClientsTableProps = {};

const ClientsTable: React.FC<ClientsTableProps> = (props) => {
    const [clients, setClients] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/clients/")
        .then(response => setClients(response.data));
    }, []);

    const dataSource = clients;

    const columns = [
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'last_name',
            width: 100,
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'first_name',
            width: 100,
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
            key: 'patronymic',
            width: 100,
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
            width: 100,
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            width: 140,
        },
        {
            title: 'Дата рождения',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
            width: 100,
        },
        {
            title: 'Баланс (руб.)',
            dataIndex: 'balance_rub',
            key: 'balance_rub',
            width: 90,
        },
        {
            title: 'Баланс (мин.)',
            dataIndex: 'balance_min',
            key: 'balance_min',
            width: 90,
        },
        {
            title: 'Оплата минутами',
            dataIndex: 'payment_min_status',
            key: 'payment_min_status',
            width: 80,
        },
        {
            title: 'Бан',
            dataIndex: 'ban_status',
            key: 'ban_status',
            width: 80,
        },
        {
            title: 'Ссылка для друзей',
            dataIndex: 'ref_link',
            key: 'ref_link',
            width: 100,
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

export default ClientsTable;
