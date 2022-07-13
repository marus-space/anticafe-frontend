import React from 'react';
import { render } from '@testing-library/react';

import CostTable from '../CostTable';

const testId = 'testingCostTable';

type CostTableProps = React.ComponentProps<typeof CostTable>;

const renderComponent = (props: CostTableProps = {}) => render(
  <CostTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CostTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
