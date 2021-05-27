import React from 'react';
import { Link } from 'react-router-dom';
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
                <Button disabled={disabled} type="primary">
                    <Link to={{ pathname: '/forms/process' }}>Обработать анкету</Link>
                </Button>
            </Space>
        </div>
    );
};

export default FormActionBar;
