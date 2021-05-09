import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './ActionBar.module.scss';

type ActionBarProps = {};

const ActionBar: React.FC<ActionBarProps> = (props) => {
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

export default ActionBar;
