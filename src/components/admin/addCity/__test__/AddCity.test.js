import { fireEvent, render, screen } from '@testing-library/react';
import AddCity from '../AddCity';

describe('AddCity', () => {
  test('should render AddCity', () => {
    render(<AddCity />);
    const openEl = screen.getByTestId('openEl');
    fireEvent.click(openEl);
  });
});
