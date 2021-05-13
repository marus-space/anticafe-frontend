import React, { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import moment from 'moment';
import axios from 'axios';

import classes from './FormTable.module.scss';

type FormTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    last_name: string,
    first_name: string,
    patronymic: string,
    phone: number,
    email: string,
    ref_link_from: string,
    ref_link: string,
    source: string,
    guest_card_id: number,
    card_id: number,
    card_type: string,
    processed: boolean,
  }

const FormTable: React.FC<FormTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
    const [form, setForm] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/form/")
        .then(response => setForm(response.data));
    }, []);

    const dataSource = form;

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
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).isValid() ? moment.utc(date).format('DD.MM.YYYY') : ""}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Ссылка друга</span>,
            dataIndex: 'ref_link_from',
            key: 'ref_link_from',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Ссылка для друзей</span>,
            dataIndex: 'ref_link',
            key: 'ref_link',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Источник</span>,
            dataIndex: 'source',
            key: 'source',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Гостевая карта</span>,
            dataIndex: 'guest_card_id',
            key: 'guest_card_id',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Клубная карта</span>,
            dataIndex: 'card_id',
            key: 'card_id',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Тип карты</span>,
            dataIndex: 'card_type',
            key: 'card_type',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Статус анкеты</span>,
            dataIndex: 'processed',
            key: 'processed',
            width: 80,
            render: (value: boolean) => <Checkbox checked={value} className={classes.alignCenter} />
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="questionnaire_id"
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

export default FormTable;
