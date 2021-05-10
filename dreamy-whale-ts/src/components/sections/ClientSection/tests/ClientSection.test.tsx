import React from 'react';
import { render } from '@testing-library/react';

import ClientSection from '../ClientSection';

const testId = 'testingClientSection';

type ClientSectionProps = React.ComponentProps<typeof ClientSection>;

const renderComponent = (props: ClientSectionProps = {}) => render(
  <ClientSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ClientSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
