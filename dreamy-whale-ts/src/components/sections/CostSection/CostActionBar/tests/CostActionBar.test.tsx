import React from 'react';
import { render } from '@testing-library/react';

import CostActionBar from '../CostActionBar';

const testId = 'testingCostActionBar';

type CostActionBarProps = React.ComponentProps<typeof CostActionBar>;

const renderComponent = (props: CostActionBarProps = {}) => render(
  <CostActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CostActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
