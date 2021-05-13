import React from 'react';
import { render } from '@testing-library/react';

import ReservationTariffActionBar from '../ReservationTariffActionBar';

const testId = 'testingReservationTariffActionBar';

type ReservationTariffActionBarProps = React.ComponentProps<typeof ReservationTariffActionBar>;

const renderComponent = (props: ReservationTariffActionBarProps = {}) => render(
  <ReservationTariffActionBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ReservationTariffActionBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
