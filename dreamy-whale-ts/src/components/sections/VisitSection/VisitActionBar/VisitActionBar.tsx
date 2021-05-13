import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './VisitActionBar.module.scss';

type VisitActionBarProps = {};

const VisitActionBar: React.FC<VisitActionBarProps> = (props) => {
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
                <Button>Новое посещение</Button>
                <Button disabled>Изменить посещение</Button>
                <Button disabled>Удалить посещение</Button>
            </Space>
        </div>
    );
};

export default VisitActionBar;
