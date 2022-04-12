import { convertCtoF } from '../contansts/contansts';

const initState = [
  {
    weekWeather: [],
    detalsWeather: {},
  },
];

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CALL_CHARTS': {
      const { list, id, city } = action.payload;
      return [
        ...state,
        {
          weekWeather: action.payload.list,
          detalsWeather: {
            name: city.name,
            tempC: list[id].main.temp.toFixed(0),
            tempF: convertCtoF(list[id].main.temp).toFixed(0),
            icon: list[id].weather[0].icon,
            humidity: list[id].main.humidity,
            windSpeed: list[id].wind.speed.toFixed(1),
          },
        },
      ];
    }

    case 'DETAIL_WEATHER':
      const newState = state.map((object, index) => {
        if (index === action.payload.i) {
          object = { ...object, detalsWeather: action.payload.weatherScreenData };
        }
        return object;
      });
      return newState;

    default:
      return state;
  }
};

export default weatherReducer;
