import React, { memo, useEffect, useState } from 'react';
import TemperatureSwitch from '../temperatureSwitch/TemperatureSwitch';
import { hour, minute, year, amPm, date, day, month } from '../../contansts/contansts';
import styles from './Home.module.scss';

const Home = ({ data, temperature, setTemperature }) => {
  const [rainNotification, setRainNotification] = useState(false);
  // handle weather if it rains
  useEffect(() => {
    if (data.detalsWeather.icon == '10n' || data.detalsWeather.icon == '10d') {
      setRainNotification(true);
    } else {
      setRainNotification(false);
    }
  }, [data]);

  return (
    <>
      <div className={styles.homeWeather}>
        <TemperatureSwitch setTemperature={setTemperature} temperature={temperature} />
        <div className={styles.presentTime}>
          <span className={styles.hour}>
            {hour}:{minute} {amPm},
          </span>
          <span className={styles.week}>{day}, </span>
          <span className={styles.month}>
            {month} {date},
          </span>
          <span className={styles.year}>{year}</span>

          {rainNotification && (
            <div className={styles.rainNotification}>Trời có mưa, hãy mang theo dù!</div>
          )}
        </div>

        <div className={styles.weatherInfo}>
          <div className={styles.mainInfo}>
            <div className={styles.currentWeatherPhoto}>
              <img src={`http://openweathermap.org/img/wn/${data.detalsWeather.icon}@2x.png`}></img>
            </div>

            {temperature ? (
              <div data-testid="temp" className={styles.temperatureF}>
                {data.detalsWeather.tempF}
              </div>
            ) : (
              <div className={styles.temperatureC}>{data.detalsWeather.tempC}</div>
            )}
          </div>

          <h1 className={styles.nameCity} aria-label="nameCity">
            {data.detalsWeather.name}
          </h1>

          <div className={styles.infoSupplement}>
            <div className={styles.humidity}>
              <h3 data-testid="test">Humidity</h3>
              <div className={styles.parameter}>{data.detalsWeather.humidity}</div>
            </div>

            <div className={styles.windSpeed}>
              <h3>Wind speed</h3>
              <div className={styles.parameter}>{data.detalsWeather.windSpeed} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
