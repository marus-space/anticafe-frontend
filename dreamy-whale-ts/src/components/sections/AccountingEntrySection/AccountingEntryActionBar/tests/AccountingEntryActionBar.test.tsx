import React from 'react';
import { render } from '@testing-library/react';

import AccountingEntryActionBar from '../AccountingEntryActionBar';

const testId = 'testingAccountingEntryActionBar';

type AccountingEntryActionBarProps = React.ComponentProps<typeof AccountingEntryActionBar>;

const renderComponent = (props: AccountingEntryActionBarProps = {}) => render(
  <AccountingEntryActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент AccountingEntryActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
