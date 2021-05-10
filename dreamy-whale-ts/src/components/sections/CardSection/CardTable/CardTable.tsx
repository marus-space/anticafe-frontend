import React, { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './CardTable.module.scss';

type CardTableProps = {};

const CardTable: React.FC<CardTableProps> = (props) => {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        axios
        .get("/client_cards/")
        .then(response => setCards(response.data));
    }, []);

    const dataSource = cards;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>ID Клиента</span>,
            dataIndex: 'client',
            key: 'client',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>ID Карты</span>,
            dataIndex: 'card',
            key: 'card',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Статус карты</span>,
            dataIndex: 'card_status',
            key: 'card_status',
            width: 100,
        },
        {
            title: () => <span className={classes.alignCenter}>Дата последнего изменения</span>,
            dataIndex: 'date',
            key: 'date',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment(date).format('DD.MM.YYYY')}</span>
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

export default CardTable;
