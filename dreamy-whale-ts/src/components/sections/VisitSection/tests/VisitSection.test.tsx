import React from 'react';
import { render } from '@testing-library/react';

import VisitSection from '../VisitSection';

const testId = 'testingVisitSection';

type VisitSectionProps = React.ComponentProps<typeof VisitSection>;

const renderComponent = (props: VisitSectionProps = {}) => render(
  <VisitSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
