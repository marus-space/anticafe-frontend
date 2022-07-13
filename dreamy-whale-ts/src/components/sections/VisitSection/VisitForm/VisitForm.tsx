import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import 'moment/locale/ru';
import moment, { Moment } from 'moment';
import axios from 'axios';

import { ClientDataType } from '../../../types/DataType';
import { VisitDataType } from '../../../types/DataType';
import showSuccessMessage from '../../../layouts/SuccessMessage';
import showErrorMessage from '../../../layouts/ErrorMessage';
import classes from './VisitForm.module.scss';

type VisitFormProps = {
    client?: ClientDataType,
    visit?: VisitDataType,
    method: "POST" | "PATCH" | "DELETE",
};

const VisitForm: React.FC<VisitFormProps> = (props) => {
    const {client, visit, method} = props;

    const onFinish = (values: {start: Moment, end: Moment, comment: string}) => {
        const formObject = {
            client: client? client?.client_id : visit?.client,
            start: values.start.format('YYYY-MM-DD HH:mm'),
            end: values.end.format('YYYY-MM-DD HH:mm'),
            comment: values.comment ? values.comment : '',
        }
        console.log(JSON.stringify(formObject));

        const headers = {
            'Content-Type': 'application/json'
        };

        if (method === "POST") {
            axios
            .post('/visits/', JSON.stringify(formObject), { headers: headers })
            .then(response => {
                showSuccessMessage('Посещение было успешно создано!');
                setTimeout(() => window.location.href = "/visits/", 1000);
            })
            .catch(error => {
                console.error(error.response.data.error);
                showErrorMessage(error.response.data.error);
        })}
        else if (method === "PATCH") {
            axios
            .patch('/visits/' + visit?.visit_id, JSON.stringify(formObject), { headers: headers })
            .then(response => {
                showSuccessMessage('Посещение было успешно изменено!');
                setTimeout(() => window.location.href = "/visits/", 1000);
            })
            .catch(error => {
                console.error(error.response.data.error);
                showErrorMessage(error.response.data.error);
        })}
        else if (method === "DELETE") {
            axios
            .delete('/visits/' + visit?.visit_id)
            .then(response => {
                showSuccessMessage('Посещение было успешно удалено!');
                setTimeout(() => window.location.href = "/visits/", 1000);
            })
            .catch(error => {
                console.error(error.response.data.error);
                showErrorMessage(error.response.data.error ? error.response.data.error : error);
        })};
    };

    if (!client && !visit) {
        return (<Redirect to={window.location.href.includes("/clients/new_visit") ? "/clients": "/visits"} />);
    };

    return (
        <div className={classes.component}>
            <Form
                name="visit_form"
                onFinish={onFinish}
                initialValues={method === "POST" ? { client: client?.last_name + ' ' + client?.first_name }
                    : {
                        client: visit?.last_name + ' ' + visit?.first_name,
                        start: moment(visit?.start),
                        end: moment(visit?.end),
                        comment: visit?.comment ? visit?.comment : '',
                    }}
            >
                <Form.Item name="client" label="Клиент">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="start">
                    <DatePicker
                        disabled={method === "DELETE"}
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Начало посещения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="end">
                    <DatePicker
                        disabled={method === "DELETE"}
                        format="DD.MM.YYYY HH:mm"
                        showTime
                        placeholder="Окончание посещения"
                        locale={locale}
                        className={classes.datePicker}
                    />
                </Form.Item>
                <Form.Item name="comment">
                    <Input placeholder="Комментарий" disabled={method === "DELETE"} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {method === 'POST' ? 'Создать' : method === 'PATCH' ? 'Сохранить изменения' : 'Удалить посещение'}
                    </Button>
                </Form.Item>
            </Form>           
        </div>
    );        
};

export default VisitForm;
