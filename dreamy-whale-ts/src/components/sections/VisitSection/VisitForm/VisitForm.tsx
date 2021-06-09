import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import { Moment } from 'moment';
import axios from 'axios';

import { ClientDataType as DataType } from '../../../types/DataType';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './VisitForm.module.scss';

type VisitFormProps = {
    client: DataType,
};

const VisitForm: React.FC<VisitFormProps> = (props) => {
    const {client} = props;

    const onFinish = (values: {start: Moment, end: Moment, comment: string}) => {
        const formObject = {
            client: client.client_id,
            start: values.start.format('YYYY-MM-DD HH:mm'),
            end: values.end.format('YYYY-MM-DD HH:mm'),
            comment: values.comment ? values.comment : '',
        }
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
        .post('/visits/', JSON.stringify(formObject), { headers: headers })
        .then(response => window.location.href = "/visits/")
        .catch(error => {
            console.error(error.response.data.error);
            showErrorMessage(error.response.data.error);
        });
    };

    return (
        <div className={classes.component}>
            <Form
                name="visit_form"
                onFinish={onFinish}
                initialValues={{ client: client.last_name + ' ' + client.first_name }}
            >
                <Form.Item name="client">
                    <Input disabled placeholder="Клиент" />
                </Form.Item>
                <Form.Item name="start">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        showTime
                        placeholder="Начало посещения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="end">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        showTime
                        placeholder="Окончание посещения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="comment">
                    <Input placeholder="Комментарий" />
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

export default VisitForm;
