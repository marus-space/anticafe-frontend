import React from 'react';
import { render } from '@testing-library/react';

import AccountingEntrySection from '../AccountingEntrySection';

const testId = 'testingAccountingEntrySection';

type AccountingEntrySectionProps = React.ComponentProps<typeof AccountingEntrySection>;

const renderComponent = (props: AccountingEntrySectionProps = {}) => render(
  <AccountingEntrySection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент AccountingEntrySection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
