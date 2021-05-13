import React from 'react';
import { render } from '@testing-library/react';

import CostSection from '../CostSection';

const testId = 'testingCostSection';

type CostSectionProps = React.ComponentProps<typeof CostSection>;

const renderComponent = (props: CostSectionProps = {}) => render(
  <CostSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CostSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
