import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './SubscriptionActionBar.module.scss';

type SubscriptionActionBarProps = {};

const SubscriptionActionBar: React.FC<SubscriptionActionBarProps> = (props) => {
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder="Имя клиента"
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
                <Button>Новый абонемент</Button>
                <Button disabled>Изменить абонемент</Button>
                <Button disabled>Удалить абонемент</Button>
            </Space>
        </div>
    );
};

export default SubscriptionActionBar;
