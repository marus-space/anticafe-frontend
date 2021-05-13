import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import clsx from 'clsx';

import Sidebar from '../Sidebar';
import Header from '../Header';
import ClientSection from '../../sections/ClientSection';
import CardSection from '../../sections/CardSection';
import VisitSection from '../../sections/VisitSection';
import SubscriptionSection from '../../sections/SubscriptionSection';
import CostSection from '../../sections/CostSection';
import AccountingEntrySection from '../../sections/AccountingEntrySection';
import ReservationSection from '../../sections/ReservationSection';
import FormSection from '../../sections/FormSection';
import ScannerSection from '../../sections/ScannerSection';

import VisitTariffSecton from '../../sections/VisitTariffSection';
import SubscriptionTariffSecton from '../../sections/SubscriptionTariffSection';
import ReservationTariffSecton from '../../sections/ReservationTariffSection';
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
            <Route exact path="/" component={ClientSection} />
            <Route exact path="/cards" component={CardSection} />
            <Route exact path="/visits" component={VisitSection} />
            <Route exact path="/subscriptions" component={SubscriptionSection}/>
            <Route exact path="/costs" component={CostSection} />
            <Route exact path="/accounting_entries" component={AccountingEntrySection} />
            <Route exact path="/reservations" component={ReservationSection} />
            <Route exact path="/forms" component={FormSection} />
            <Route exact path="/scanner" component={ScannerSection} />

            <Route exact path="/calculator">
              <Header title="Калькулятор стоимости посещений" />
              <Content className={classes.content}>
                <div>Калькулятор стоимости посещений</div>
              </Content>
            </Route>

            <Route exact path="/tariff/visit" component={VisitTariffSecton} />
            <Route exact path="/tariff/subscription" component={SubscriptionTariffSecton} />
            <Route exact path="/tariff/reservation" component={ReservationTariffSecton} />
          </Switch>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default PageLayout;
