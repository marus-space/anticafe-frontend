import React from 'react';
import { render } from '@testing-library/react';

import ReservationTariffTable from '../ReservationTariffTable';

const testId = 'testingReservationTariffTable';

type ReservationTariffTableProps = React.ComponentProps<typeof ReservationTariffTable>;

const renderComponent = (props: ReservationTariffTableProps = {}) => render(
  <ReservationTariffTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ReservationTariffTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
