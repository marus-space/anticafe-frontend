import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './CardTable.module.scss';

type CardTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    client: string,
    card: number,
    card_status: string,
    date: Date,
  }

const CardTable: React.FC<CardTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
    const [cards, setCards] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/client_cards/")
        .then(response => setCards(response.data));
    }, []);

    const dataSource = cards;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Клиент</span>,
            dataIndex: 'client',
            key: 'client',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Клубная карта</span>,
            dataIndex: 'card',
            key: 'card',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Статус карты</span>,
            dataIndex: 'card_status',
            key: 'card_status',
            width: 120,
        },
        {
            title: () => <span className={classes.alignCenter}>Дата последнего изменения</span>,
            dataIndex: 'date',
            key: 'date',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('HH:mm DD.MM.YY')}</span>
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="client_card_id"
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

export default CardTable;
