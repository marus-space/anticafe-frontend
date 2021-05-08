import React from 'react';
import { Typography } from 'antd';
import icon from './assets/whale.png';
import classes from './Logo.module.scss';
import clsx from 'clsx';

const { Text } = Typography;

type LogoProps = {
    collapsed: boolean,
};

const Logo = (props: LogoProps) => {
    const { collapsed } = props;

    return (
        <div className={classes.component}>
            <img src={icon} alt="logo" className={clsx(classes.icon, {[classes.center]: collapsed})}/>
            <Text
                strong
                className={clsx(classes.name, {[classes.hide]: collapsed})}
            >
                Dreamy Whale
            </Text>
        </div>
    );
};

export default Logo;
