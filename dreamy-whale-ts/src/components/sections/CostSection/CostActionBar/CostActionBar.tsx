import React from 'react';
import { Space, Input } from 'antd';

import classes from './CostActionBar.module.scss';

type CostActionBarProps = {};

const CostActionBar: React.FC<CostActionBarProps> = (props) => {
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
            </Space>
        </div>
    );
};

export default CostActionBar;
