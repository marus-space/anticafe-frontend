import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionTariffActionBar from '../SubscriptionTariffActionBar';

const testId = 'testingSubscriptionTariffActionBar';

type SubscriptionTariffActionBarProps = React.ComponentProps<typeof SubscriptionTariffActionBar>;

const renderComponent = (props: SubscriptionTariffActionBarProps = {}) => render(
  <SubscriptionTariffActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionTariffActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
