import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import { CostDataType as DataType } from '../../../types/DataType';
import classes from './CostTable.module.scss';

type CostTableProps = {};

const CostTable: React.FC<CostTableProps> = (props) => {
    const [costs, setCosts] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/costs/")
        .then(response => setCosts(response.data));
    }, []);

    const dataSource = costs;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Клиент</span>,
            dataIndex: 'client',
            key: 'client',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Тип расхода</span>,
            dataIndex: 'cost_type',
            key: 'cost_type',
            width: 125,
        },
        {
            title: () => <span className={classes.alignCenter}>Дата</span>,
            dataIndex: 'date',
            key: 'date',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('HH:mm DD.MM.YY')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость (руб.)</span>,
            dataIndex: 'cost_rub',
            key: 'cost_rub',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость (мин.)</span>,
            dataIndex: 'cost_min',
            key: 'cost_min',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Бонус (мин.)</span>,
            dataIndex: 'bonus',
            key: 'bonus',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                size="small"
            />
        </div>
    );
};

export default CostTable;
