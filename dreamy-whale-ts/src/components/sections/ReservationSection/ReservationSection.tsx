import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../layouts/Header';
import ReservationActionBar from './ReservationActionBar';
import ReservationTable from './ReservationTable';
import ReservationForm from './ReservationForm';
import classes from './ReservationSection.module.scss';

class ReservationSection extends React.Component {
    state = {
        selectedRowKeys: [],
    };
    
    onSelect = (selectedRowKeys: React.Key[]) => {
        this.setState({ selectedRowKeys });
        console.log(this.state.selectedRowKeys);
    };
    
    render () {
        const { Content } = Layout;
        return (
            <div className={classes.component} onClick={() => this.onSelect([])}>
                <Switch>
                    <Route exact path="/reservations">
                        <Header title="Брони и аренды" />
                        <Content className={classes.content}>
                            <ReservationActionBar selectedRowKeys={this.state.selectedRowKeys} />
                            <ReservationTable selectedRowKeys={this.state.selectedRowKeys} onSelect={this.onSelect} />
                        </Content>
                    </Route>
                    <Route exact path="/reservations/new_reservation">
                        <Header title="Новая бронь" />
                        <Content className={classes.content}>
                            <ReservationForm />
                        </Content>
                    </Route>
                </Switch>
                
            </div>
        );
    }
}

export default ReservationSection;
