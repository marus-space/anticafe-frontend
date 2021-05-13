import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

import classes from './VisitTariffTable.module.scss';

type VisitTariffTableProps = {
    selectedRowKeys: React.Key[],
    onSelect: (selectedRowKeys: React.Key[]) => void,
};

interface DataType {
    key: React.Key;
    card_type: string,
    start_tariff_zone: string,
    end_tariff_zone: string,
    cost_per_minute: number,
  };

const VisitTariffTable: React.FC<VisitTariffTableProps> = (props) => {
    const { selectedRowKeys, onSelect } = props;
    const [visitTariff, setVisitTariff] = useState<DataType[]>([]);

    useEffect(() => {
        axios
        .get("/visit_tariff/")
        .then(response => setVisitTariff(response.data));
    }, []);

    const dataSource = visitTariff;

    const columns = [
        {
            title: () => <span className={classes.alignCenter}>Тип карты</span>,
            dataIndex: 'card_type',
            key: 'card_type',
            width: 100,
            render: (text: string) => <span className={classes.alignCenter}>{text === 'Бронзовая' ? 'Клубная' : text}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Начало действия тарифа</span>,
            dataIndex: 'start_tariff_zone',
            key: 'start_tariff_zone',
            width: 100,
            render: (time: string) => <span className={classes.alignCenter}>{time}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Окончание действия тарифа</span>,
            dataIndex: 'end_tariff_zone',
            key: 'end_tariff_zone',
            width: 100,
            render: (time: string) => <span className={classes.alignCenter}>{time}</span>
        },
        {
            title: () => <span className={classes.alignCenter}>Стоимость минуты (руб.)</span>,
            dataIndex: 'cost_per_minute',
            key: 'cost_per_minute',
            width: 100,
            render: (value: number) => <span className={classes.alignCenter}>{value}</span>
        },
    ];
    
    return (
        <div className={classes.component}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="visit_tariff_id"
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

export default VisitTariffTable;
