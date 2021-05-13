import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './FormActionBar.module.scss';

type FormActionBarProps = {
    selectedRowKeys: React.Key[],
};

const FormActionBar: React.FC<FormActionBarProps> = (props) => {
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
                <Button disabled={disabled} type="primary">Изменить данные</Button>
            </Space>
        </div>
    );
};

export default FormActionBar;
