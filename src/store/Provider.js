import { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [temperatureSwitch, setTemperatureSwitch] = useState(false);

  return (
    <Context.Provider value={[temperatureSwitch, setTemperatureSwitch]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
