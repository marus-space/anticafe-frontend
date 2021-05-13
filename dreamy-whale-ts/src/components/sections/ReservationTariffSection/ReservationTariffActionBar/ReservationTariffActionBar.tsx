import React from 'react';
import { Button, Space } from 'antd';

import classes from './ReservationTariffActionBar.module.scss';

type ReservationTariffActionBarProps = {
    selectedRowKeys: React.Key[],
};

const ReservationTariffActionBar: React.FC<ReservationTariffActionBarProps> = (props) => {
    const { selectedRowKeys } = props;
    const disabled = selectedRowKeys.length === 0 ? true : false;
    
    return (
        <div className={classes.component}>
        <Space>
            <Button>Новый тариф</Button>
            <Button disabled={disabled} type="primary">Изменить тариф</Button>
            <Button disabled={disabled} type="primary">Удалить тариф</Button>
        </Space>
    </div>
    );
};

export default ReservationTariffActionBar;
