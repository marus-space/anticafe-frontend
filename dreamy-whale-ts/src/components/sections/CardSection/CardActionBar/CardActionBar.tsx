import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './CardActionBar.module.scss';

type CardActionBarProps = {
    selectedRowKeys: React.Key[],
};

const CardActionBar: React.FC<CardActionBarProps> = (props) => {
    const { selectedRowKeys } = props;
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    const disabled = selectedRowKeys.length === 0 ? true : false;

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder="Имя или номер карты"
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
                <Button>Новая карта</Button>
                <Button disabled={disabled} type="primary">Изменить статус карты</Button>
            </Space>
        </div>
    );
};

export default CardActionBar;
