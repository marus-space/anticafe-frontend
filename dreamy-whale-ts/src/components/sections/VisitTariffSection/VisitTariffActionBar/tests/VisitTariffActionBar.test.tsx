import React from 'react';
import { render } from '@testing-library/react';

import VisitTariffActionBar from '../VisitTariffActionBar';

const testId = 'testingVisitTariffActionBar';

type VisitTariffActionBarProps = React.ComponentProps<typeof VisitTariffActionBar>;

const renderComponent = (props: VisitTariffActionBarProps = {}) => render(
  <VisitTariffActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitTariffActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
