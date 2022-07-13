import React from 'react';
import { render } from '@testing-library/react';

import VisitTariffTable from '../VisitTariffTable';

const testId = 'testingVisitTariffTable';

type VisitTariffTableProps = React.ComponentProps<typeof VisitTariffTable>;

const renderComponent = (props: VisitTariffTableProps = {}) => render(
  <VisitTariffTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitTariffTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
