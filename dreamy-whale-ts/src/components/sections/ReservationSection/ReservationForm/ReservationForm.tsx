import React from 'react';
import { Form, Input, Button, DatePicker, Select, InputNumber } from 'antd';
import 'moment/locale/ru';
import moment from 'moment';
import axios from 'axios';

import classes from './ReservationForm.module.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';

const { Option } = Select;

class ReservationForm extends React.Component {
    onFinish = (values: any) => {
        console.log(values);
    };

    render () {
        return (
            <div className={classes.component}>
                <Form name="reservation_form" onFinish={this.onFinish}>
                    <Form.Item name="last_name" rules={[{ required: true }]}>
                        <Input placeholder="Фамилия" />
                    </Form.Item>
                    <Form.Item name="first_name" rules={[{ required: true }]}>
                        <Input placeholder="Имя" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[{ required: true }]}>
                        <Input placeholder="Номер телефона" />
                    </Form.Item>
                    <Form.Item name="reservation_object" rules={[{ required: true }]}>
                        <Select placeholder="Объект брони">
                            <Option value="Столик 1 (6 человек)">Столик 1 (6 человек)</Option>
                            <Option value="Столик 2 (6 человек + проектор)">Столик 2 (6 человек + проектор)</Option>
                            <Option value="Столик 3 (4 человека)">Столик 3 (4 человека)</Option>
                            <Option value="Столик 4 (4 человека)">Столик 4 (4 человека)</Option>
                            <Option value="Столик 5 (2 человека)">Столик 5 (2 человека)</Option>
                            <Option value="Приставка Xbox 360">Приставка Xbox 360</Option>
                            <Option value="Приставка Play Station 4">Приставка Play Station 4</Option>
                            <Option value="Приставка Play Station 5">Приставка Play Station 5</Option>
                            <Option value="Комната Переговорная">Комната Переговорная</Option>
                            <Option value="Комната Игровая">Комната Игровая</Option>
                            <Option value="Комната Кинозал">Комната Кинозал</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="start" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            placeholder="Начало брони"
                            locale={locale}
                            className={classes.datePicker}
                        />
                    </Form.Item>
                    <Form.Item name="end" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            placeholder="Окончание брони"
                            locale={locale}
                            className={classes.datePicker}
                        />
                    </Form.Item>
                    <Form.Item name="client_card" rules={[{ required: true }]}>
                        <Select placeholder="Клубная карта">
                            <Option value="1">У меня есть клубная карта</Option>
                            <Option value="0">У меня нет клубной карты</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="options" rules={[{ required: true }]}>
                        <Select placeholder="Дополнительные условия">
                            <Option value="Нет">Нет</Option>
                            <Option value="Школьник">Школьник</Option>
                            <Option value="Студент">Студент</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="sum_rub">
                        <InputNumber
                            min="1"
                            className={classes.unputNumber}
                            placeholder="Количество человек"
                            style={{ width: '100%' }}
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
};

export default ReservationForm;
