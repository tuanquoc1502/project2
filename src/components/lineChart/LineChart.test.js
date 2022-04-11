import React from 'react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineChart from './LineChart';

const Wrapper = (
  <Provider store={store}>
    <LineChart />
  </Provider>
);

describe('test LineChart', () => {
  test('render LineChart without crashing', async () => {
    const mockAppState = {
      data: {
        weekWeather: [
          {
            clouds: { all: 9 },
            dt: 1649235600,
            dt_txt: '2022-04-06 09:00:00',
            main: {
              feels_like: 27.47,
              grnd_level: 1012,
              humidity: 37,
              pressure: 1014,
              sea_level: 1014,
              temp: 28,
              temp_kf: -2.07,
              temp_max: 30.07,
              temp_min: 28,
            },
            pop: 0,
            sys: { pod: 'd' },
            visibility: 10000,
            weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
            wind: { speed: 1.36, deg: 52, gust: 2.12 },
          },
        ],
        detalsWeather: {
          humidity: 51,
          icon: '04n',
          name: 'Hanoi',
          tempC: '25',
          tempF: '77',
          windSpeed: '3.0',
        },
        messageError: false,
      },
    };

    render(Wrapper);
  });
});
