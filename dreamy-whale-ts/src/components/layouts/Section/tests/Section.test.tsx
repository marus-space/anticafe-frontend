import React from 'react';
import { render } from '@testing-library/react';

import Section from '../Section';

const testId = 'testingSection';

type SectionProps = React.ComponentProps<typeof Section>;

const renderComponent = (props: SectionProps = {}) => render(
  <Section
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Section', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
