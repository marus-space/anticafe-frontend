import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from '../Sidebar';

const testId = 'testingSidebar';

type SidebarProps = React.ComponentProps<typeof Sidebar>;

const renderComponent = (props: SidebarProps = {}) => render(
  <Sidebar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Sidebar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
