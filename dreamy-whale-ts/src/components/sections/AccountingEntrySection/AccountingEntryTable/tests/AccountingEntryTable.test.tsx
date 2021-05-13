import React from 'react';
import { render } from '@testing-library/react';

import AccountingEntryTable from '../AccountingEntryTable';

const testId = 'testingAccountingEntryTable';

type AccountingEntryTableProps = React.ComponentProps<typeof AccountingEntryTable>;

const renderComponent = (props: AccountingEntryTableProps = {}) => render(
  <AccountingEntryTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент AccountingEntryTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
