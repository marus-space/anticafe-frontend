import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './AccountingEntryActionBar.module.scss';

type AccountingEntryActionBarProps = {};

const AccountingEntryActionBar: React.FC<AccountingEntryActionBarProps> = (props) => {
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
                <Button>Новое пополнение</Button>
                <Button disabled>Изменить пополнение</Button>
                <Button disabled>Удалить пополнение</Button>
            </Space>
        </div>
    );
};

export default AccountingEntryActionBar;
