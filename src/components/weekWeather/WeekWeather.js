import React, { useState } from 'react';
import styles from './WeatherByDay.module.scss';
import LineChart from '../lineChart/LineChart';
import { convertCtoF } from '../../contansts/contansts';
import { useDispatch } from 'react-redux';
import { toDay, daysOfWeek, DETAIL_WEATHER } from '../../contansts/contansts';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WeekWeather = ({ data, i, temperature }) => {
  const [colorCurrentWeather, setColorCurrentWeather] = useState(toDay);

  const dispatch = useDispatch();
  // handle weather changes during the week
  const handleRenderWeekWeather = (index) => {
    const weatherScreenData = {
      name: data.detalsWeather.name,
      tempC: data.weekWeather[index].main.temp.toFixed(0),
      tempF: convertCtoF(data.weekWeather[index].main.temp).toFixed(0),
      icon: data.weekWeather[index].weather[0].icon,
      humidity: data.weekWeather[index].main.humidity,
      wind: data.weekWeather[index].wind.speed.toFixed(1),
    };

    dispatch(DETAIL_WEATHER({ weatherScreenData, i }));

    setColorCurrentWeather(index);
  };

  // setting slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className={styles.wapper}>
      <div>
        <LineChart index={colorCurrentWeather} data={data} temperature={temperature} />
      </div>

      <div className={styles.weatherByDay}>
        <ul>
          <Slider {...settings}>
            {data.weekWeather.map((weatherDay, index) => (
              <li
                className={colorCurrentWeather === index ? styles.active : ''}
                key={index}
                onClick={() => handleRenderWeekWeather(index)}
                aria-label="input"
              >
                <h3>{daysOfWeek[index]}</h3>
                <div className={styles.photo}>
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherDay?.weather[0].icon}@2x.png`}
                  ></img>
                </div>
                <div className={styles.title}>Humidity</div>
                <div className={styles.humidity}>{weatherDay?.main.humidity}%</div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default WeekWeather;
