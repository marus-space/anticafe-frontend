import React, { useState } from 'react';

import { VisitDataType as DataType } from '../../types/DataType';
import VisitActionBar from './VisitActionBar';
import VisitTable from './VisitTable';
import VisitForm from './VisitForm';
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
            path: '/visits/new',
            title: 'Новое посещение',
            component: <div></div>,
        },
        {
            path: '/visits/edit',
            title: 'Изменение посещения',
            component: <VisitForm visit={visit[0]} method="PATCH" />,
        },
        {
            path: '/visits/delete',
            title: 'Удаление посещения',
            component: <VisitForm visit={visit[0]} method="DELETE" />,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default VisitSection;
