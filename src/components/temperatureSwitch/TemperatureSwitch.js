import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { useStore } from '../../store';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const TemperatureSwitch = () => {
  const [temperatureSwitch, setTemperatureSwitch] = useStore();

  const toggleTemperature = () => {
    setTemperatureSwitch(!temperatureSwitch);
  };

  return (
    <div>
      <Switch {...label} color="default" onChange={toggleTemperature} />
      <span>{temperatureSwitch ? '°F' : '°C'}</span>
    </div>
  );
};

export default TemperatureSwitch;
