import React from 'react';
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
                <Button disabled={disabled} type="primary">Новое посещение</Button>
                <Button disabled={disabled} type="primary">Новый абонемент</Button>
                <Button disabled={disabled} type="primary">Новое пополнение</Button>
                <Button disabled={disabled} type="primary">Изменить данные</Button>
            </Space>
        </div>
    );
};

export default ClientActionBar;
