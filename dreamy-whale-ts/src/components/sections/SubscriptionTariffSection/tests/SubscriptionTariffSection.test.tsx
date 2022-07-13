import React from 'react';
import { render } from '@testing-library/react';

import SubscriptionTariffSection from '../SubscriptionTariffSection';

const testId = 'testingSubscriptionTariffSection';

type SubscriptionTariffSectionProps = React.ComponentProps<typeof SubscriptionTariffSection>;

const renderComponent = (props: SubscriptionTariffSectionProps = {}) => render(
  <SubscriptionTariffSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SubscriptionTariffSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
