import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './ClientActionBar.module.scss';

type ClientActionBarProps = {};

const ClientActionBar: React.FC<ClientActionBarProps> = (props) => {
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder="Имя или номер телефона"
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
                <Button>Посещение</Button>
                <Button>Абонемент</Button>
                <Button>Пополнение</Button>
                <Button>Оплата минутами</Button>
                <Button>Бан</Button>
            </Space>
        </div>
    );
};

export default ClientActionBar;