import React from 'react';
import { Button, Space } from 'antd';

import classes from './VisitTariffActionBar.module.scss';

type VisitTariffActionBarProps = {
    selectedRowKeys: React.Key[],
};

const VisitTariffActionBar: React.FC<VisitTariffActionBarProps> = (props) => {
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

export default VisitTariffActionBar;
