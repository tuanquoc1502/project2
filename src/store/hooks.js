// Custom Hooks

import { useContext } from 'react';
import { StoreContext } from '.';

export const useStore = () => {
  const [temperature, setTemperature] = useContext(StoreContext);
  return [temperature, setTemperature];
};
