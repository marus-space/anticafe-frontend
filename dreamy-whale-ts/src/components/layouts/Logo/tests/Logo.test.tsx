import React from 'react';
import { render } from '@testing-library/react';

import Logo from '../Logo';

const testId = 'testingLogo';

type LogoProps = React.ComponentProps<typeof Logo>;

const renderComponent = (props: LogoProps = {collapsed: false}) => render(
  <Logo
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Logo', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
