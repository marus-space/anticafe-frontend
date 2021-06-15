import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import { Moment } from 'moment';
import axios from 'axios';

import { FormDataType } from '../../../types/DataType';
import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './FormForm.module.scss';

const { Option } = Select;

type FormFormProps = {
    form: FormDataType,
};

const FormForm: React.FC<FormFormProps> = (props) => {
    const {form} = props;

    const onFinish = (values: {last_name: string, first_name: string, patronymic: string,
        phone: string, email: string, date_of_birth: Moment, ref_link_from: string,
        guest_card_id: number, card_id: number, card_type: string}) => {
            const formObject = {
                last_name: values.last_name,
                first_name: values.first_name,
                patronymic: values.patronymic,
                phone: values.phone,
                email: values.email,
                date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
                ref_link_from: values.ref_link_from,
                guest_card_id: values.guest_card_id,
                card_id: values.card_id,
                card_type: values.card_type,
                processed: 1,
            };

            console.log(JSON.stringify(formObject));

            const headers = {
                'Content-Type': 'application/json'
            };

            axios
            .patch('/form/' + form.questionnaire_id, JSON.stringify(formObject), { headers: headers })
            .then(response => {
                showSuccessMessage("Анкета была успешно обработана!");
                setTimeout(() => window.location.href = "/clients/", 1000);
            })
            .catch(error => {
                console.error(error.response.data.error);
                showErrorMessage(error.response.data.error);
            });
    };

    if (!form) {
        return (<Redirect to="/forms/" />);
    };          

    return (
        <div className={classes.component}>
            <Form
                name="form_form"
                onFinish={onFinish}
                initialValues={{
                    last_name: form.last_name,
                    first_name: form.first_name,
                    phone: form.phone,
                }}
            >
                <Form.Item name="last_name" rules={[{ required: true }]}>
                    <Input placeholder="Фамилия" />
                </Form.Item>
                <Form.Item name="first_name" rules={[{ required: true }]}>
                    <Input placeholder="Имя" />
                </Form.Item>
                <Form.Item name="patronymic">
                    <Input placeholder="Отчество" />
                </Form.Item>
                <Form.Item name="phone" rules={[{ required: true }]}>
                    <Input placeholder="Номер телефона" maxLength={11} />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="E-mail" />
                </Form.Item>
                <Form.Item name="date_of_birth" rules={[{ required: true }]}>
                    <DatePicker
                        format="DD.MM.YYYY"
                        placeholder="Дата рождения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="ref_link_from">
                    <Input placeholder="Ссылка друга" />
                </Form.Item>
                <Form.Item name="guest_card_id">
                    <Input placeholder="Гостевая карта" />
                </Form.Item>
                <Form.Item name="card_id">
                    <Input placeholder="Клубная карта" maxLength={9} />
                </Form.Item>
                <Form.Item name="card_type" rules={[{ required: true }]}>
                    <Select placeholder="Тип клубной карты">
                        <Option value="Бронзовая">Бронзовая</Option>
                        <Option value="Серебряная">Серебряная</Option>
                        <Option value="Золотая">Золотая</Option>
                        <Option value="Платиновая">Платиновая</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Обработать анкету
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormForm;
