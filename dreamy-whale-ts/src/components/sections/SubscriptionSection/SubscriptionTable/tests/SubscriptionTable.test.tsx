import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionTable from '../SubscriptionTable';

const testId = 'testingSubscriptionTable';

type SubscriptionTableProps = React.ComponentProps<typeof SubscriptionTable>;

const renderComponent = (props: SubscriptionTableProps = {}) => render(
  <SubscriptionTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
