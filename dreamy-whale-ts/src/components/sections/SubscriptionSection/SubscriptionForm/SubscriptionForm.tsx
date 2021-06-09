import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import { Moment } from 'moment';
import axios from 'axios';

import { ClientDataType as DataType } from '../../../types/DataType';
import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './SubscriptionForm.module.scss';

const { Option } = Select;

type SubscriptionFormProps = {
    client: DataType,
};

const  SubscriptionForm: React.FC<SubscriptionFormProps> = (props) => {
    const {client} = props;

    const onFinish = (values: {subscription: string, start: Moment}) => {
        const formObject = {
            client: client.client_id,
            subscription: values.subscription,
            start: values.start.format('YYYY-MM-DD HH:mm'),
        }
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
        .post('/client_subscriptions/', JSON.stringify(formObject), { headers: headers })
        .then(response => {
            showSuccessMessage('Абонемент был успешно добавлен!');
            setTimeout(() => window.location.href = "/subscriptions/", 1000);
        })
        .catch(error => {
            console.error(error.response.data.error);
            showErrorMessage(error.response.data.error);
        });
    };

    return (
        <div className={classes.component}>
            <Form
                name="subscription_form"
                onFinish={onFinish}
                initialValues={{ client: client.last_name + ' ' + client.first_name }}
            >
                <Form.Item name="client" label="Клиент">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="subscription">
                    <Select placeholder="Абонемент">
                    <Option value="Дневной">Дневной</Option>
                    <Option value="Дневной (школа)">Дневной (школа)</Option>
                    <Option value="Дневной (университет)">Дневной (университет)</Option>
                    <Option value="Ночной">Ночной</Option>
                    <Option value="Суточный">Суточный</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="start">
                    <DatePicker
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Начало действия абонемента"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Form>           
        </div>
    );
};

export default  SubscriptionForm;
