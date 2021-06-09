import React, { useState } from 'react';
import { Layout } from 'antd';

import { VisitDataType as DataType } from '../../types/DataType';
import Header from '../../layouts/Header';
import VisitActionBar from './VisitActionBar';
import VisitTable from './VisitTable';
import Section from '../../layouts/Section';
import classes from './VisitSection.module.scss';

const VisitSection: React.FC = () => {
    const [visit, setVisit] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setVisit([record]);
    };

    const routs = [
        {
            path: '/visits',
            title: 'Посещения',
            component: 
                <>
                    <VisitActionBar selectedItem={visit[0] ? true : false} />
                    <VisitTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/visits',
            title: 'Новое посещение',
            component: <div></div>,
        },
        {
            path: '/visits',
            title: 'Изменить посещение',
            component: <div></div>,
        },
        {
            path: '/visits',
            title: 'Удалить посещение',
            component: <div></div>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default VisitSection;
