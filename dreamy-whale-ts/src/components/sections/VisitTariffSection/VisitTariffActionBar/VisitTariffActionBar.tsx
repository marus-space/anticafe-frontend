import React from 'react';
import { Button, Space } from 'antd';

import classes from './VisitTariffActionBar.module.scss';

type VisitTariffActionBarProps = {};

const VisitTariffActionBar: React.FC<VisitTariffActionBarProps> = (props) => (
    <div className={classes.component}>
        <Space>
            <Button>Новый тариф</Button>
            <Button disabled>Изменить тариф</Button>
            <Button disabled>Удалить тариф</Button>
        </Space>
    </div>
);

export default VisitTariffActionBar;
