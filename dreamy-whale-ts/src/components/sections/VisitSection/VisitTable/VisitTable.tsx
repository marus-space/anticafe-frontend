import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import axios from 'axios';

import { VisitDataType as DataType } from '../../../types/DataType';
import classes from './VisitTable.module.scss';

const duration = (minutes: number) => {
    const result = 
        minutes === null
            ? ''
            : minutes >= 60 && minutes % 60 === 0
                ? Math.floor(minutes / 60) + ' ч '
                : minutes >= 60 && minutes % 60 !== 0
                    ? Math.floor(minutes / 60) + ' ч ' + minutes % 60 + ' мин'
                    : minutes % 60 + ' мин';
    return result;
};

type VisitTableProps = {
    onSelectItem: (record: DataType) => void,
};

const VisitTable: React.FC<VisitTableProps> = (props) => {
    const { onSelectItem } = props;
    const [visits, setVisits] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/visits/")
        .then(response => setVisits(response.data));
    }, []);

    const dataSource = visits;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Клиент</span>,
            dataIndex: 'client',
            key: 'client',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Начало посещения</span>,
            dataIndex: 'start',
            key: 'start',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).format('HH:mm DD.MM.YY')}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Окончание посещения</span>,
            dataIndex: 'end',
            key: 'end',
            width: 100,
            render: (date: Date) => <span className={classes.alignCenter}>{moment.utc(date).isValid() ? moment.utc(date).format('HH:mm DD.MM.YY') : ""}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Длительность</span>,
            dataIndex: 'duration',
            key: 'duration',
            width: 80,
            render: (value: number) => <span className={classes.alignCenter}>{duration(value)}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Комментарий</span>,
            dataIndex: 'comment',
            key: 'comment',
            width: 100,
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="visit_id"
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

export default VisitTable;
