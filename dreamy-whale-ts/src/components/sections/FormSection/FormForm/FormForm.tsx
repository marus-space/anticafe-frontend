import React from 'react';
import { Form, Input, Button, DatePicker, Select, InputNumber } from 'antd';
import 'moment/locale/ru';
import moment from 'moment';
import axios from 'axios';

import classes from './FormForm.module.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';

const { Option } = Select;

class FormForm extends React.Component {
    onFinish = (values: any) => {
        console.log(values);
    };

    render () {
        return (
            <div className={classes.component}>
                <Form name="form_form" onFinish={this.onFinish}>
                    <Form.Item name="last_name" rules={[{ required: true }]}>
                        <Input placeholder="Фамилия" defaultValue="Бронный" />
                    </Form.Item>
                    <Form.Item name="first_name" rules={[{ required: true }]}>
                        <Input placeholder="Имя" defaultValue="Олег" />
                    </Form.Item>
                    <Form.Item name="patronymic">
                        <Input placeholder="Отчество" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[{ required: true }]}>
                        <Input placeholder="Номер телефона" defaultValue="89072837412" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true }]}>
                        <Input placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item name="date_of_birth" rules={[{ required: true }]}>
                        <DatePicker
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
                        <Input placeholder="Клубная карта" />
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
};

export default FormForm;
