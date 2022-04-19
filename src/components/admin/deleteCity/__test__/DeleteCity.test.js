import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import DeleteCity from '../DeleteCity';

const setOpenConfirm = jest.fn();

describe('DeleteCity', () => {
  test('should render DeleteCity', () => {
    render(
      <Provider store={store}>
        <DeleteCity openConfirm={true} setOpenConfirm={setOpenConfirm} />
      </Provider>
    );

    const clickEl = screen.queryByText('Delete');
    fireEvent.click(clickEl);
  });
});
