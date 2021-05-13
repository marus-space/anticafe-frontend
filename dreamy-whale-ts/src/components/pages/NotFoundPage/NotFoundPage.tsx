import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

import classes from './NotFoundPage.module.scss';

type NotFoundPageProps = {};

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
    return (
        <div className={classes.component}>
            <Result
                status="404"
                title="404"
                subTitle="К сожалению, запрошенная страница не существует."
                extra={
                    <Button type="primary">
                        <Link to={{ pathname: '/' }}>
                            Перейти на главную
                        </Link>
                    </Button>
                }
            />
        </div>
    );
};

export default NotFoundPage;
