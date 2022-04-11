import React from 'react';
import Home from '../home/Home';
import WeekWeather from '../weekWeather/WeekWeather';
import { useState } from 'react';

const Container = ({ data, index }) => {
  const [temperature, setTemperature] = useState(false);

  return (
    <div className="wapper">
      <Home data={data} temperature={temperature} setTemperature={setTemperature} />
      <WeekWeather data={data} i={index} temperature={temperature} />
    </div>
  );
};

export default Container;
