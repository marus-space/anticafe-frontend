import React, { useState } from 'react';

import { FormDataType as DataType } from '../../types/DataType';
import FormActionBar from './FormActionBar';
import FormTable from './FormTable';
import FormForm from './FormForm';
import Section from '../../layouts/Section';
import classes from './FormSection.module.scss';

const FormSection: React.FC = () => {
    const [form, setForm] = useState<DataType[]>([]);

    const onSelectItem = (record: DataType) => {
        setForm([record]);
    };

    const routs = [
        {
            path: '/forms',
            title: 'Анкеты для оформления клубной карты',
            component: 
                <>
                    <FormActionBar selectedItem={form[0] ? true : false} />
                    <FormTable onSelectItem={onSelectItem} />
                </>,
        },
        {
            path: '/forms/process',
            title: 'Обработка анкеты',
            component: <FormForm />,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default FormSection;
