import React from 'react';
import { Typography } from 'antd';

import classes from './Header.module.scss';

const { Title } = Typography;

type HeadProps = {
    title: string,
};

const Head: React.FC<HeadProps> = (props) => {
    const { title } = props;

    return(
        <header className={classes.component}>
            <Title
                level={3}
                className={classes.title}
            >
                {title}
            </Title>
        </header>
    );
};

export default Head;
