import React from 'react';
import { render } from '@testing-library/react';

import FormActionBar from '../FormActionBar';

const testId = 'testingFormActionBar';

type FormActionBarProps = React.ComponentProps<typeof FormActionBar>;

const renderComponent = (props: FormActionBarProps = {}) => render(
  <FormActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FormActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
