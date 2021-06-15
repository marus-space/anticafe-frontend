import React from 'react';
import { Form, Input, Button, DatePicker, Select, InputNumber } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import { Moment } from 'moment';
import axios from 'axios';

import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './ReservationForm.module.scss';

const { Option } = Select;

const ReservationForm: React.FC = () => {
    const onFinish = (values : {last_name: string, first_name: string, phone: string, 
        reservation_object: string, start: Moment, end: Moment, client_card: number, 
        options: string, num_of_persons: number, comment: string}) => {
        const formObject = {
            last_name: values.last_name,
            first_name: values.first_name,
            phone: values.phone,
            reservation_object: values.reservation_object,
            start: values.start.format('YYYY-MM-DD HH:mm'),
            end: values.end.format('YYYY-MM-DD HH:mm'),
            client_card: values.client_card,
            schoolboy: values.options === "Школьник" ? 1 : 0,
            student: values.options === "Студент" ? 1 : 0,
            num_of_persons: values.num_of_persons,
            comment: values.comment,
            
        };
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
        .post('/reservations/', JSON.stringify(formObject), { headers: headers })
        .then(response => {
            showSuccessMessage("Новая бронь была успешно добавлена!");
            setTimeout(() => window.location.href = "/reservations/", 1000);
        })
        .catch(error => {
            console.error(error.response.data.error);
            showErrorMessage(error.response.data.error);
        });
    };

    return (
        <div className={classes.component}>
            <Form
                name="reservation_form"
                onFinish={onFinish}
            >
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
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Начало брони"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="end" rules={[{ required: true }]}>
                    <DatePicker
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Окончание брони"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="client_card" rules={[{ required: true }]}>
                    <Select placeholder="Клубная карта">
                        <Option value={1}>Есть клубная карта</Option>
                        <Option value={0}>Нет клубной карты</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="options" rules={[{ required: true }]}>
                    <Select placeholder="Дополнительные условия">
                        <Option value="Нет">Нет</Option>
                        <Option value="Школьник">Школьник</Option>
                        <Option value="Студент">Студент</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="num_of_persons">
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

export default ReservationForm;
