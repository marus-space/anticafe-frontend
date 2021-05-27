import React from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd';
import 'moment/locale/ru';
import moment from 'moment';
import axios from 'axios';

import classes from './AccountingEntryForm.module.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';

const { Option } = Select;

class AccountingEntryForm extends React.Component {
        onFinish = (values: any) => {
        console.log(values);
    };

    render () {
        return (
            <div className={classes.component}>
                <Form name="accounting_entry_form" onFinish={this.onFinish}>
                    <Form.Item name="client" rules={[{ required: true }]}>
                        <Input placeholder="Клиент" defaultValue="Полкин Андрей" />
                    </Form.Item>
                    <Form.Item name="accounting_entry_type" rules={[{ required: true }]}>
                        <Select placeholder="Тип пополнения">
                        <Option value="Пополнение (наличный расчёт)">Пополнение (наличный расчёт)</Option>
                        <Option value="Пополнение (безналичный расчёт)">Пополнение (безналичный расчёт)</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="date" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            defaultValue={moment()}
                            placeholder="Дата"
                            locale={locale}
                            className={classes.datePicker}
                        />
                    </Form.Item>
                    <Form.Item name="cost_rub" rules={[{ required: true }]}>
                        <InputNumber
                            min="0"
                            step="0.01"
                            className={classes.unputNumber}
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

export default AccountingEntryForm;
