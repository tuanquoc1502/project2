import React, { memo } from 'react';
import styles from './TemperatureSwitch.module.scss';
import { useStore } from '../../store';

import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 66px;
  height: 35px;
  padding: 8px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: block;
  background-color: #fff;
  width: 22px;
  height: 16px;
  border-radius: 10px;
  top: 9.5px;
  left: 10px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: '°C';
    text-align: center;
    color: #000;
    font-weight: 800;
    font-size: 12.5px;
    margin-top: 2.9px;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
      display: block;
      content: '°F';
      margin-top: 2.9px;
      font-weight: 800;
      font-size: 12.5px;
      text-align: center;
      color: #000;
    }
  }
`;

const SwitchTrack = styled('span')(`
  background-color: #007fff;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`);

const TemperatureSwitch = (props) => {
  const [temperatureSwitch, setTemperatureSwitch] = useStore();

  const toggleTemperature = () => {
    setTemperatureSwitch(!temperatureSwitch);
  };

  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <div className={styles.temperatureSwitch}>
      <SwitchRoot onChange={toggleTemperature} className={clsx(stateClasses)}>
        <SwitchTrack>
          <SwitchThumb className={clsx(stateClasses)} />
        </SwitchTrack>
        <SwitchInput {...getInputProps()} aria-label="Demo switch" />
      </SwitchRoot>
    </div>
  );
};

export default memo(TemperatureSwitch);
