import React from 'react';
import { render } from '@testing-library/react';

import FormTable from '../FormTable';

const testId = 'testingFormTable';

type FormTableProps = React.ComponentProps<typeof FormTable>;

const renderComponent = (props: FormTableProps = {}) => render(
  <FormTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FormTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
