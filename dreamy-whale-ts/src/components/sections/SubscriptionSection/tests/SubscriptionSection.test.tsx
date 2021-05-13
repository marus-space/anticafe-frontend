import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionSection from '../SubscriptionSection';

const testId = 'testingSubscriptionSection';

type SubscriptionSectionProps = React.ComponentProps<typeof SubscriptionSection>;

const renderComponent = (props: SubscriptionSectionProps = {}) => render(
  <SubscriptionSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
