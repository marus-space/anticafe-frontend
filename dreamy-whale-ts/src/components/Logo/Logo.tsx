import React from 'react';
import { Typography } from 'antd';
import icon from './assets/whale.png';
import classes from './Logo.module.scss';
import clsx from 'clsx';

const { Text } = Typography;

type LogoProps = {
    collapsed: boolean,
};

const Logo: React.FC<LogoProps> = (props) => {
    const { collapsed } = props;

    return (
        <div className={clsx(classes.component, {[classes.collapsed]: collapsed})}>
            <img src={icon} alt="logo"/>
            <Text strong>Dreamy Whale</Text>
        </div>
    );
};

export default Logo;
