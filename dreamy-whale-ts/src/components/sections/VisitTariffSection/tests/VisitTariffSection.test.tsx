import React from 'react';
import { render } from '@testing-library/react';

import VisitTariffSection from '../VisitTariffSection';

const testId = 'testingVisitTariffSection';

type VisitTariffSectionProps = React.ComponentProps<typeof VisitTariffSection>;

const renderComponent = (props: VisitTariffSectionProps = {}) => render(
  <VisitTariffSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitTariffSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
