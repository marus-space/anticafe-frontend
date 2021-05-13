import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './FormActionBar.module.scss';

type FormActionBarProps = {};

const FormActionBar: React.FC<FormActionBarProps> = (props) => {
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
                <Button disabled>Изменить данные</Button>
            </Space>
        </div>
    );
};

export default FormActionBar;
