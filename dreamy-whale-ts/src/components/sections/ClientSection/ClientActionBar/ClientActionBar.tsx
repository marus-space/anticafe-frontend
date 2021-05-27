import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Input } from 'antd';

import classes from './ClientActionBar.module.scss';

type ClientActionBarProps = {
    selectedRowKeys: React.Key[],
};

const ClientActionBar: React.FC<ClientActionBarProps> = (props) => {
    const { selectedRowKeys } = props;
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    const disabled = selectedRowKeys.length === 0 ? true : false;

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder="Имя или номер телефона"
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
                <Button disabled={disabled} type="primary">
                    <Link to={{ pathname: '/clients/new_visit' }}>Новое посещение</Link>
                </Button>
                <Button disabled={disabled} type="primary">Новый абонемент</Button>
                <Button disabled={disabled} type="primary">
                    <Link to={{ pathname: '/clients/new_accounting_entry' }}>Новое пополнение</Link>
                </Button>
                <Button disabled={disabled} type="primary">Изменить данные</Button>
            </Space>
        </div>
    );
};

export default ClientActionBar;
