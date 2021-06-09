import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';
import classes from './Section.module.scss';

const { Content } = Layout;

type SectionProps = {
    routs: {path: string, title: string, component: React.ReactNode}[],
};

const Section: React.FC<SectionProps> = (props) => {
    const {routs} = props;

    return(
        <div className={classes.component}>
            <Switch>
                {routs.map((route) => (
                    <Route key={route.path} exact path={route.path}>
                        <Header title={route.title} />
                        <Content className={classes.content}>
                            {route.component}
                        </Content>
                    </Route>
                ))}
            </Switch>
        </div>
    );
};
    
export default Section;
