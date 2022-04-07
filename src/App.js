import WeatherByDay from './components/weatherByDay/WeatherByDay';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div className="wapperAppWeather">
        <Home />
        <WeatherByDay />
      </div>
    </div>
  );
}

export default App;
