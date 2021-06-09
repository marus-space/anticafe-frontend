import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { VisitTariffDataType as DataType } from '../../../types/DataType';
import classes from './VisitTariffTable.module.scss';

type VisitTariffTableProps = {
    onSelectItem: (record: DataType) => void,
};

const VisitTariffTable: React.FC<VisitTariffTableProps> = (props) => {
    const { onSelectItem } = props;
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

export default VisitTariffTable;
