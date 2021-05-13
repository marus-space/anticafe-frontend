import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './ReservationActionBar.module.scss';

type ReservationActionBarProps = {
    selectedRowKeys: React.Key[],
};

const ReservationActionBar: React.FC<ReservationActionBarProps> = (props) => {
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
                <Button>Новая бронь</Button>
                <Button disabled={disabled} type="primary">Изменить бронь</Button>
                <Button disabled={disabled} type="primary">Удалить бронь</Button>
            </Space>
        </div>
    );
};

export default ReservationActionBar;
