import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import moment, { Moment } from 'moment';
import axios from 'axios';

import { ClientDataType as DataType } from '../../../types/DataType';
import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './AccountingEntryForm.module.scss';

const { Option } = Select;

type AccountingEntryFormProps = {
    client: DataType,
};

const AccountingEntryForm: React.FC<AccountingEntryFormProps> = (props) => {
    const {client} = props;

    const onFinish = (values: {accounting_entry_type: string, date: Moment, cost_rub: number, comment: string}) => {
        const formObject = {
            client: client.client_id,
            accounting_entry_type: values.accounting_entry_type,
            date: values.date.format('YYYY-MM-DD HH:mm'),
            cost_rub: values.cost_rub,
            comment: values.comment ? values.comment : '',
        }
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
        .post('/accounting_entries/', JSON.stringify(formObject), { headers: headers })
        .then(response => {
            showSuccessMessage('Проводка была успешно добавлена!');
            setTimeout(() => window.location.href = "/accounting_entries/", 1000);
        })
        .catch(error => {
            console.error(error.response.data.error);
            showErrorMessage(error.response.data.error);
        });
    };

    if (!client) {
        return (<Redirect to={window.location.href.includes("/clients/new_accounting_entry") ? "/clients": "/accounting_entries"} />);
    };

    return (
        <div className={classes.component}>
            <Form
                name="accounting_entry_form"
                onFinish={onFinish}
                initialValues={{ client: client.last_name + ' ' + client.first_name, date: moment() }}
            >
                <Form.Item name="client">
                    <Input disabled placeholder="Клиент" />
                </Form.Item>
                <Form.Item name="accounting_entry_type">
                    <Select placeholder="Тип пополнения">
                    <Option value="Пополнение (наличный расчёт)">Пополнение (наличный расчёт)</Option>
                    <Option value="Пополнение (безналичный расчёт)">Пополнение (безналичный расчёт)</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="date">
                    <DatePicker
                    format="DD.MM.YYYY HH:mm"
                    showTime
                    placeholder="Дата"
                    locale={locale}
                    className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="cost_rub" rules={[{ required: true }]}>
                    <InputNumber
                        min="0"
                        step="0.1"
                        placeholder="Сумма пополнения"
                        className={classes.inputNumber}
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

export default AccountingEntryForm;
