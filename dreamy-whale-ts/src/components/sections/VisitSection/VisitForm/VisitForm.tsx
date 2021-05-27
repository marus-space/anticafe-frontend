import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import 'moment/locale/ru';
import moment from 'moment';
import axios from 'axios';

import classes from './VisitForm.module.scss';
import locale from 'antd/es/date-picker/locale/ru_RU';

class VisitForm extends React.Component {
    onFinish = (values: any) => {
        console.log(values);
    };

    render () {
        return (
            <div className={classes.component}>
                <Form name="visit_form" onFinish={this.onFinish}>
                    <Form.Item name="client" rules={[{ required: true }]}>
                        <Input placeholder="Клиент" defaultValue="Полкин Андрей" />
                    </Form.Item>
                    <Form.Item name="start" rules={[{ required: true }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime
                            defaultValue={moment()}
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
};

export default VisitForm;
