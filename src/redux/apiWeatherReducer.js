const initState = [];

const allWeatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CALL_WEATHER':
      const { list, city } = action.payload;
      return [
        ...state,
        { nameCity: city.name, tempC: list[0].main.temp.toFixed(0), humidity: list[0].main.humidity, wind: list[0].wind.speed.toFixed(1) },
      ];

    case 'ADD_WEATHER': {
      return [...state, action.payload];
    }

    case 'EDIT_WEATHER': {
      state[action.payload.indexWeather] = action.payload;
      return [...state];
    }

    case 'DELETE_WEATHER': {
      state.splice(action.payload, 1);
      return [...state];
    }

    case 'API_WEATHER_RESET':
      return [];

    default:
      return state;
  }
};

export default allWeatherReducer;
