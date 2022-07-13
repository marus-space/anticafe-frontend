import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import clsx from 'clsx';

import Sidebar from '../Sidebar';
import ClientSection from '../../sections/ClientSection';
import CardSection from '../../sections/CardSection';
import VisitSection from '../../sections/VisitSection';
import SubscriptionSection from '../../sections/SubscriptionSection';
import CostSection from '../../sections/CostSection';
import AccountingEntrySection from '../../sections/AccountingEntrySection';
import ReservationSection from '../../sections/ReservationSection';
import FormSection from '../../sections/FormSection';
import ScannerSection from '../../sections/ScannerSection';
import CalculatorSection from '../../sections/CalculatorSection';
import VisitTariffSecton from '../../sections/VisitTariffSection';
import SubscriptionTariffSecton from '../../sections/SubscriptionTariffSection';
import ReservationTariffSecton from '../../sections/ReservationTariffSection';
import classes from './Layout.module.scss';

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
            <Route path="/clients" component={ClientSection} />
            <Route path="/cards" component={CardSection} />
            <Route path="/visits" component={VisitSection} />
            <Route path="/subscriptions" component={SubscriptionSection}/>
            <Route path="/costs" component={CostSection} />
            <Route path="/accounting_entries" component={AccountingEntrySection} />
            <Route path="/reservations" component={ReservationSection} />
            <Route path="/forms" component={FormSection} />
            <Route path="/scanner" component={ScannerSection} />
            <Route path="/calculator" component={CalculatorSection} />
            <Route path="/tariff/visit" component={VisitTariffSecton} />
            <Route path="/tariff/subscription" component={SubscriptionTariffSecton} />
            <Route path="/tariff/reservation" component={ReservationTariffSecton} />

            <Redirect from="/" to="/clients" />
          </Switch>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default PageLayout;
