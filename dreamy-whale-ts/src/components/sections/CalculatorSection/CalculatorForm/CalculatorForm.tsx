import React from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import 'moment/locale/ru';
import moment from 'moment';
import axios from 'axios';

import classes from './CalculatorForm.module.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';

const { Option } = Select;

class CalculatorForm extends React.Component {
        onFinish = (values: any) => {
        console.log(values);
    };

    render () {
        return (
            <div className={classes.component}>
                <Form name="calculator_form" onFinish={this.onFinish}>
                    <Form.Item name="start" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            placeholder="Начало посещения"
                            locale={locale}
                            className={classes.datePicker}
                        />
                    </Form.Item>
                    <Form.Item name="end" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            placeholder="Окончание посещения"
                            locale={locale}
                            className={classes.datePicker}
                        />
                    </Form.Item>
                    <Form.Item name="card_type" rules={[{ required: true }]}>
                        <Select placeholder="Тип карты">
                            <Option value="Гостевая">Гостевая</Option>
                            <Option value="Бронзовая">Бронзовая</Option>
                            <Option value="Серебряная">Серебряная</Option>
                            <Option value="Золотая">Золотая</Option>
                            <Option value="Платиновая">Платиновая</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="options" rules={[{ required: true }]}>
                        <Select placeholder="Дополнительные условия">
                            <Option value="Нет">Нет</Option>
                            <Option value="Школьник">Школьник</Option>
                            <Option value="Студент">Студент</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Рассчитать стоимость
                        </Button>
                    </Form.Item>
                    <Form.Item name="sum_rub">
                        <InputNumber
                            min="0"
                            step="0.1"
                            className={classes.unputNumber}
                            placeholder="Результат"
                            defaultValue="399.00"
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item name="comment">
                        <Input placeholder="Описание" defaultValue="Дневной (университет) абонемент" />
                    </Form.Item>
                </Form>
            </div>
        );
    };
};

export default CalculatorForm;
