import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './AccountingEntryActionBar.module.scss';

type AccountingEntryActionBarProps = {
    selectedRowKeys: React.Key[],
};

const AccountingEntryActionBar: React.FC<AccountingEntryActionBarProps> = (props) => {
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
                <Button>Новое пополнение</Button>
                <Button disabled={disabled} type="primary">Изменить пополнение</Button>
                <Button disabled={disabled} type="primary">Удалить пополнение</Button>
            </Space>
        </div>
    );
};

export default AccountingEntryActionBar;
