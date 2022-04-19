import React, { memo, useEffect, useState } from 'react';
import { API_RESET, FETCH_API_CHART_REQUEST, toDay } from '../../contansts/contansts';
import { useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './ChartNumberSelection.module.scss';
import { numberSelector } from '../../contansts/contansts';
import { useSelector } from 'react-redux';
import { totalCity } from '../../contansts/contansts';

const ChartNumberSelection = () => {
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();
  const totalData = useSelector((state) => state.numberCharts);

  useEffect(() => {
    // city ​​entered by user

    dispatch(API_RESET());
    for (let i = 0; i < number; i++) {
      dispatch(FETCH_API_CHART_REQUEST({ id: toDay, nameCity: totalCity[i] }));
    }
  }, [number]);

  return (
    <>
      <FormControl
        sx={{
          mt: 5,
          mb: 2,
          minWidth: 150,
          background: 'white',
          borderRadius: '10px',
        }}
        className={styles.box}
      >
        <Select
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          disabled={totalData[0]?.request ? false : true}
          style={{ fontSize: '1.4rem' }}
        >
          {numberSelector.map((number) => (
            <MenuItem style={{ fontSize: '1.3rem' }} key={number} value={number}>
              {number} Chart
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default memo(ChartNumberSelection);
