import React from 'react';
import { render } from '@testing-library/react';

import ActionBar from '../ActionBar';

const testId = 'testingActionBar';

type ActionBarProps = React.ComponentProps<typeof ActionBar>;

const renderComponent = (props: ActionBarProps = {}) => render(
  <ActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
