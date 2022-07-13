import React from 'react';
import { render } from '@testing-library/react';

import VisitTable from '../VisitTable';

const testId = 'testingVisitTable';

type VisitTableProps = React.ComponentProps<typeof VisitTable>;

const renderComponent = (props: VisitTableProps = {}) => render(
  <VisitTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
