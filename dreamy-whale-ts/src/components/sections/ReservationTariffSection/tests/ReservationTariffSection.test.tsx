import React from 'react';
import { render } from '@testing-library/react';

import ReservationTariffSection from '../ReservationTariffSection';

const testId = 'testingReservationTariffSection';

type ReservationTariffSectionProps = React.ComponentProps<typeof ReservationTariffSection>;

const renderComponent = (props: ReservationTariffSectionProps = {}) => render(
  <ReservationTariffSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ReservationTariffSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
