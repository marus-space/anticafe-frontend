import React from 'react';
import { Button, Space } from 'antd';

import classes from './SubscriptionTariffActionBar.module.scss';

type SubscriptionTariffActionBarProps = {
    selectedRowKeys: React.Key[],
};

const SubscriptionTariffActionBar: React.FC<SubscriptionTariffActionBarProps> = (props) => {
    const { selectedRowKeys } = props;
    const disabled = selectedRowKeys.length === 0 ? true : false;

    return (<div className={classes.component}>
        <Space>
            <Button>Новый абонемент</Button>
            <Button disabled={disabled} type="primary">Изменить абонемент</Button>
            <Button disabled={disabled} type="primary">Удалить абонемент</Button>
        </Space>
    </div>);
};

export default SubscriptionTariffActionBar;
