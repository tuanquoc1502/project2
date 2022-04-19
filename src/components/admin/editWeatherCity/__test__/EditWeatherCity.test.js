import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import EditWeatherCity from '../EditWeatherCity';

const setOpen = jest.fn();

const dataItem = { nameCity: 'Hanoi', tempC: '25', humidity: 74, wind: '3.9' };

describe('EditWeatherCity', () => {
  test(' should render EditWeatherCity', () => {
    render(
      <Provider store={store}>
        <EditWeatherCity open={true} setOpen={setOpen} dataItem={dataItem} />
      </Provider>
    );

    const nameCityInputEl = screen.getByTestId('inputNameCity');
    fireEvent.change(nameCityInputEl, { target: { value: 'hanoi 2' } });
    expect(nameCityInputEl).toBe('hanoi 2');
  });
});
