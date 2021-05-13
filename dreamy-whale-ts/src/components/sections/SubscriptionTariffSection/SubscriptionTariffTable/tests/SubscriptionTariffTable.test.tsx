import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionTariffTable from '../SubscriptionTariffTable';

const testId = 'testingSubscriptionTariffTable';

type SubscriptionTariffTableProps = React.ComponentProps<typeof SubscriptionTariffTable>;

const renderComponent = (props: SubscriptionTariffTableProps = {}) => render(
  <SubscriptionTariffTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionTariffTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
