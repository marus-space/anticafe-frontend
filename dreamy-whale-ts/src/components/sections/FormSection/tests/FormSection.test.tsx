import React from 'react';
import { render } from '@testing-library/react';

import FormSection from '../FormSection';

const testId = 'testingFormSection';

type FormSectionProps = React.ComponentProps<typeof FormSection>;

const renderComponent = (props: FormSectionProps = {}) => render(
  <FormSection
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FormSection', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
