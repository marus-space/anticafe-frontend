import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import clsx from 'clsx';

import Sidebar from '../Sidebar';
import Header from '../Header';
import ClientSection from '../../sections/ClientSection';
import CardSection from '../../sections/CardSection';
import ReservationSection from '../../sections/ReservationSection';
import classes from './Layout.module.scss';

const { Content } = Layout;

class PageLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render () {
    return(
      <div className={classes.component}>
        <Layout className={classes.wrapper}>
          <Sidebar collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
          <Layout className={clsx(classes.page, {[classes.collapsed]: this.state.collapsed})}>
          <Switch>

            <Route exact path="/">
              <ClientSection />
            </Route>

            <Route exact path="/cards">
              <CardSection />
            </Route>

            <Route exact path="/visits">
              <Header title="Посещения" />
              <Content className={classes.content}>
                <div>Посещения</div>
              </Content>
            </Route>

            <Route exact path="/subscriptions">
              <Header title="Абонементы" />
              <Content className={classes.content}>
                <div>Абонементы</div>
              </Content>
            </Route>

            <Route exact path="/costs">
              <Header title="Расходы" />
              <Content className={classes.content}>
                <div>Расходы</div>
              </Content>
            </Route>

            <Route exact path="/accounting_entries">
              <Header title="Проводки" />
              <Content className={classes.content}>
                <div>Проводки</div>
              </Content>
            </Route>

            <Route exact path="/reservations">
              <ReservationSection />
            </Route>

            <Route exact path="/questionnaires">
              <Header title="Анкеты" />
              <Content className={classes.content}>
                <div>Анкеты</div>
              </Content>
            </Route>

            <Route exact path="/scanner">
              <Header title="Записи со сканера" />
              <Content className={classes.content}>
                <div>Записи со сканера</div>
              </Content>
            </Route>

            <Route exact path="/calculator">
              <Header title="Калькулятор стоимости посещений" />
              <Content className={classes.content}>
                <div>Калькулятор стоимости посещений</div>
              </Content>
            </Route>

            <Route exact path="/tariff/visit">
              <Header title="Тарифы на посещения" />
              <Content className={classes.content}>
                <div>Тарифы на посещения</div>
              </Content>
            </Route>

            <Route exact path="/tariff/subscription">
              <Header title="Стоимость абонементов" />
              <Content className={classes.content}>
                <div>Стоимость абонементов</div>
              </Content>
            </Route>

            <Route exact path="/tariff/reservation">
              <Header title="Тарифы на бронь и аренду" />
              <Content className={classes.content}>
                <div>Тарифы на бронь и аренду</div>
              </Content>
            </Route>

          </Switch>
        </Layout>
      </Layout>
      </div>
    );
  };
};

export default PageLayout;
