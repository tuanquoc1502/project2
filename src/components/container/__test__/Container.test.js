import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('container', () => {
  test('should render container', () => {
    render(<Container />);
  });
});
