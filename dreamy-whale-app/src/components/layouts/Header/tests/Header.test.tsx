import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header from '../Header';

const renderComponent = () => render(<Header />);

describe('Компонент Header', () => {
  it('snapshot совпадает', () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('компонент отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  describe('содержит нужные ссылки', () => {
    it('содержит ссылку на документацию по разработке приложений', () => {
      renderComponent();

      const appDocLink = screen.getByText(/Документация по разработке приложений/i);

      expect(appDocLink).toBeInTheDocument();
      expect(appDocLink).toHaveAttribute('href', 'https://dev.gnivc.ru:9443/gnivc/ff-web');
    });

    it('содержит ссылку на документацию по работе с Git', () => {
      renderComponent();

      const appDocLink = screen.getByText(/Документация по работе с Git/i);

      expect(appDocLink).toBeInTheDocument();
      expect(appDocLink).toHaveAttribute('href', 'https://dev.gnivc.ru:9443/gnivc/documentation/src/branch/master');
    });
  });
});
