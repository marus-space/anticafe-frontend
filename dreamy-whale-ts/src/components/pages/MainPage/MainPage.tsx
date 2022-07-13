import React from 'react';

import Layout from '../../layouts/Layout';
import classes from './MainPage.module.scss';

type MainPageProps = {};

const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div className={classes.component}>
            <Layout />
        </div>
    );
};

export default MainPage;
