import React from 'react';
import { render } from '@testing-library/react';

import ClientTable from '../ClientTable';

const testId = 'testingClientTable';

type ClientTableProps = React.ComponentProps<typeof ClientTable>;

const renderComponent = (props: ClientTableProps = {}) => render(
  <ClientTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ClientTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
