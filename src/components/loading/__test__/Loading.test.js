import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('loading', () => {
  test('should render loading', () => {
    render(<Loading />);
  });
});
