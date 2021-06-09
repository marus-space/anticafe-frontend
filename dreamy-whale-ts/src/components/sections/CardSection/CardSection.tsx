import React, { useState } from 'react';
import { Layout } from 'antd';

import { CardDataType as DataType } from '../../types/DataType';
import Header from '../../layouts/Header';
import CardActionBar from './CardActionBar';
import CardTable from './CardTable';
import Section from '../../layouts/Section';
import classes from './CardSection.module.scss';

const CardSection: React.FC = () => {
    const [card, setCard] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setCard([record]);
    };

    const routs = [
        {
            path: '/cards',
            title: 'Карты клиентов',
            component: 
                <>
                    <CardActionBar selectedItem={card[0] ? true : false} />
                    <CardTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/cards',
            title: 'Изменить статус карты',
            component: <div>Изменить статус карты</div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default CardSection;
