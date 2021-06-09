import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Checkbox } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import moment, { Moment } from 'moment';
import axios from 'axios';

import { ClientDataType as DataType } from '../../../types/DataType';
import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './ClientForm.module.scss';

type ClientFormProps = {
    client: DataType,
};

const ClientForm: React.FC<ClientFormProps> = (props) => {
    const {client} = props;
    const [paymentStatus, setPaymentStatus] = useState(client.payment_min_status);
    const [banStatus, setBanStatus] = useState(client.ban_status);

    const onPaymentStatusCheckboxChange = (e: { target: { checked: boolean } }) => {
        setPaymentStatus(e.target.checked);
    };

    const onBanStatusCheckboxChange = (e: { target: { checked: boolean } }) => {
        setBanStatus(e.target.checked);
    };

    const onFinish = (values: {
            last_name: string,
            first_name: string,
            patronymic: string,
            phone: number,
            email: string,
            date_of_birth: Moment,
            ref_link_from: string
        }) => {
        const formObject = {
            client_id: client.client_id,
            last_name: values.last_name,
            first_name: values.first_name,
            patronymic: values.patronymic,
            phone: values.phone,
            email: values.email,
            date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
            payment_min_status: +paymentStatus,
            ban_status: +banStatus,
            ref_link_from: values.ref_link_from
        }
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
            .patch('/clients/' + String(client.client_id), JSON.stringify(formObject), { headers: headers })
            .then(response => {
                showSuccessMessage('Данные клиента были успешно изменены!');
                setTimeout(() => window.location.href = "/clients/", 1000);
            })
            .catch(error => {
                console.error(error.response.data.error);
                showErrorMessage(error.response.data.error);
        })
    };

    return (
        <div className={classes.component}>
            <Form
                name="visit_form"
                onFinish={onFinish}
                initialValues={{ 
                    last_name: client.last_name,
                    first_name: client.first_name,
                    patronymic: client.patronymic,
                    phone: client.phone,
                    email: client.email,
                    date_of_birth: moment(client.date_of_birth),
                    payment_min_status: client.payment_min_status,
                    ban_status: client.ban_status,
                    ref_link_from: client.ref_link_from,
                    ref_link: client.ref_link,
                 }}
            >
                <Form.Item name="last_name">
                    <Input placeholder="Фамилия" />
                </Form.Item>
                <Form.Item name="first_name">
                    <Input placeholder="Имя" />
                </Form.Item>
                <Form.Item name="patronymic">
                    <Input placeholder="Отчество" />
                </Form.Item>
                <Form.Item name="phone">
                    <Input placeholder="Номер телефона" />
                </Form.Item>
                <Form.Item name="email" rules={[{ type: 'email'}]}>
                    <Input placeholder="E-mail" />
                </Form.Item>
                <Form.Item name="date_of_birth">
                    <DatePicker
                        format="DD.MM.YYYY"
                        showTime
                        placeholder="Дата рождения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="payment_min_status">
                    <Checkbox checked={paymentStatus} onChange={onPaymentStatusCheckboxChange}>Оплата минутами</Checkbox>
                </Form.Item>
                <Form.Item name="ban_status">
                    <Checkbox checked={banStatus} onChange={onBanStatusCheckboxChange}>Бан</Checkbox>
                </Form.Item>
                <Form.Item name="ref_link_from">
                    <Input placeholder="Реферальная ссылка от друга" />
                </Form.Item>
                <Form.Item name="ref_link" label="Реферальная ссылка для друзей">
                    <Input disabled />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить изменения
                    </Button>
                </Form.Item>
            </Form>           
        </div>
    );
};

export default ClientForm;
