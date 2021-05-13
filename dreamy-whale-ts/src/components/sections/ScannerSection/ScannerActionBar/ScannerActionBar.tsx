import React from 'react';
import { Space, Input } from 'antd';

import classes from './ScannerActionBar.module.scss';

type ScannerActionBarProps = {};

const ScannerActionBar: React.FC<ScannerActionBarProps> = (props) => {
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder="Номер карты"
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
            </Space>
        </div>
    );
};

export default ScannerActionBar;
