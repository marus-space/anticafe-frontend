import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, Modal } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import { Moment } from 'moment';
import axios from 'axios';

import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './CalculatorForm.module.scss';

const { Option } = Select;

const CalculatorForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [result, setResult] = useState({sum_rub: 0, comment: ''});

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
        setResult({sum_rub: 0, comment: ''});
      };

      const handleCancel = () => {
        setIsModalVisible(false);
        setResult({sum_rub: 0, comment: ''});
        form.resetFields();
      };
    
    const onFinish = (values : {start: Moment, end: Moment, card_type: string, options: string}) => {
        const formObject = {
            start: values.start.format('YYYY-MM-DD HH:mm'),
            end: values.end.format('YYYY-MM-DD HH:mm'),
            card_type: values.card_type,
            schoolboy: values.options === "Школьник" ? 1 : 0,
            student: values.options === "Студент" ? 1 : 0,
        };
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        axios
        .post('/calculator/', JSON.stringify(formObject), { headers: headers })
        .then(response => {
            showSuccessMessage("Стоимость посещения была успешно рассчитана!");
            setResult({sum_rub: response.data.sum_rub, comment: response.data.comment});
            showModal();
        })
        .catch(error => {
            console.error(error.response.data.error);
            showErrorMessage(error.response.data.error);
        });
    };

    return (
        <div className={classes.component}>
            <Form
                form={form}
                name="calculator_form"
                onFinish={onFinish}
            >
                <Form.Item name="start" rules={[{ required: true }]}>
                    <DatePicker
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Начало посещения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="end" rules={[{ required: true }]}>
                    <DatePicker
                        format="DD.MM.YYYY HH:mm"
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
            </Form>

            <Modal
                title="Результаты расчёта"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText="Новый расчёт"
                okText="Ок"
                style={{marginLeft: '605px'}}
            >
                Стоимость посещения: {result.sum_rub} рублей
                <br />
                Самый выгодный вариант: {result.comment}
            </Modal>
        </div>
    );
};

export default CalculatorForm;
