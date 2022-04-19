import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';
import ModalAddCity from '../ModalAddCity';

const setOpen = jest.fn();

describe('ModalAddCity', () => {
  test('should render ModalAddCity', () => {
    render(
      <Provider store={store}>
        <ModalAddCity open={true} setOpen={setOpen} />
      </Provider>
    );

    // const inputWindEl = screen.getByTestId('inputWind');
    // fireEvent.change(inputWindEl, { target: { value: 'change Inputwind' } });
    // expect(inputWindEl).toBe('change Inputwind');

    const saveEl = screen.queryByText('Save');
    fireEvent.click(saveEl);
  });
});
