import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './SubscriptionActionBar.module.scss';

type SubscriptionActionBarProps = {
    selectedRowKeys: React.Key[],
};

const SubscriptionActionBar: React.FC<SubscriptionActionBarProps> = (props) => {
    const { selectedRowKeys } = props;
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    const disabled = selectedRowKeys.length === 0 ? true : false;

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
                <Button disabled={disabled} type="primary">Изменить абонемент</Button>
                <Button disabled={disabled} type="primary">Удалить абонемент</Button>
            </Space>
        </div>
    );
};

export default SubscriptionActionBar;
