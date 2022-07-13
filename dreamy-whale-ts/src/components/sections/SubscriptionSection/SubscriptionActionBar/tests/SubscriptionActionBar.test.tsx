import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionActionBar from '../SubscriptionActionBar';

const testId = 'testingSubscriptionActionBar';

type SubscriptionActionBarProps = React.ComponentProps<typeof SubscriptionActionBar>;

const renderComponent = (props: SubscriptionActionBarProps = {}) => render(
  <SubscriptionActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
