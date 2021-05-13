import React from 'react';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import FormActionBar from './FormActionBar';
import FormTable from './FormTable';
import classes from './FormSection.module.scss';

const { Content } = Layout;

type FormSectionProps = {};

const FormSection: React.FC<FormSectionProps> = () => (
    <div className={classes.component}>
        <Header title="Анкеты для оформления клубной карты" />
        <Content className={classes.content}>
            <FormActionBar />
            <FormTable />
        </Content>
    </div>
);

export default FormSection;