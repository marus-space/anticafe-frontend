import React from 'react';
import { render } from '@testing-library/react';

import VisitActionBar from '../VisitActionBar';

const testId = 'testingVisitActionBar';

type VisitActionBarProps = React.ComponentProps<typeof VisitActionBar>;

const renderComponent = (props: VisitActionBarProps = {}) => render(
  <VisitActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisitActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
