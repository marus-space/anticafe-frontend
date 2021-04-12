import React, { useState, useEffect } from 'react';
import { Table, Tooltip, Space } from 'antd';
import axios from 'axios';
import clsx from 'clsx';

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
            title: 'ID',
            dataIndex: 'client_id',
            key: 'client_id',
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymic',
            key: 'patronymic',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Дата рождения',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
            width: 90,
        },
        {
            title: 'Баланс (руб.)',
            dataIndex: 'balance_rub',
            key: 'balance_rub',
            width: 70,
        },
        {
            title: 'Баланс (мин.)',
            dataIndex: 'balance_min',
            key: 'balance_min',
            width: 70,
        },
        {
            title: 'Оплата минутами',
            dataIndex: 'payment_min_status',
            key: 'payment_min_status',
            width: 70,
        },
        {
            title: 'Бан',
            dataIndex: 'ban_status',
            key: 'ban_status',
            width: 70,
        },
        {
            title: 'Ссылка для друзей',
            dataIndex: 'ref_link',
            key: 'ref_link',
            width: 100,
        },
        {
            title: 'Действия',
            key: 'action',
            width: 200,
            render: () => (
              <Space size="middle">
                <a>Посещение</a>
                <a>Пополнение</a>
                <a>Бан</a>
              </Space>
            ),
          },
        
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                title={() => 'Клиенты'}
                size="small"
            />
        </div>
    );
};

export default ClientsTable;
