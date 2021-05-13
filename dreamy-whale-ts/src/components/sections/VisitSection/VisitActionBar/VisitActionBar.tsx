import React from 'react';
import { Button, Space, Input } from 'antd';

import classes from './VisitActionBar.module.scss';

type VisitActionBarProps = {
    selectedRowKeys: React.Key[],
};

const VisitActionBar: React.FC<VisitActionBarProps> = (props) => {
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
                <Button>Новое посещение</Button>
                <Button disabled={disabled} type="primary">Изменить посещение</Button>
                <Button disabled={disabled} type="primary">Удалить посещение</Button>
            </Space>
        </div>
    );
};

export default VisitActionBar;
