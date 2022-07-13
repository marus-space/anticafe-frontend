import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Input } from 'antd';

import classes from './ActionBar.module.scss';

type ActionBarProps = {
    selectedItem: boolean,
    searchPlaceholder: string,
    actions: {
        label: string,
        alwaysEnabled: boolean,
        linkPath: string, 
    }[],
};

const ActionBar: React.FC<ActionBarProps> = (props) => {
    const { selectedItem, searchPlaceholder, actions } = props;
    const { Search } = Input;
    const onSearch = (search: string) => console.log(search);

    const disabled = !selectedItem;

    return (
        <div className={classes.component}>
            <Space>
                <Search
                    placeholder={searchPlaceholder}
                    allowClear
                    onSearch={onSearch}
                    className={classes.search}
                />
                {
                    actions.map((action) => (
                        <Button
                            disabled={action.alwaysEnabled ? false : disabled}
                            type={action.alwaysEnabled ? "default" : "primary"}
                            key={action.linkPath}
                        >
                            <Link to={{ pathname: action.linkPath }}>{action.label}</Link>
                        </Button>
                    ))
                }
            </Space>
        </div>
    );
};

export default ActionBar;
