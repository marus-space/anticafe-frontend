import React from 'react';
import { render } from '@testing-library/react';

import Layout from '../Layout';

const testId = 'testingLayout';

type LayoutProps = React.ComponentProps<typeof Layout>;

const renderComponent = (props: LayoutProps = {}) => render(
  <Layout
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Layout', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
