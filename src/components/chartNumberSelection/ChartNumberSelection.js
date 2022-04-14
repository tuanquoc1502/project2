import React, { memo, useEffect, useState } from 'react';
import { API_RESET, FETCH_API_CHART_REQUEST, toDay } from '../../contansts/contansts';
import { useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select } from '@mui/material';
import styles from './ChartNumberSelection.module.scss';

const ChartNumberSelection = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    // city ​​entered by user
    const total = ['ha noi', 'ho chi minh', 'new york', 'Bà Rịa', 'ninh binh'];

    dispatch(API_RESET());
    for (let i = 0; i < number; i++) {
      // fake time call api
      setOpen(true);

      dispatch(FETCH_API_CHART_REQUEST({ id: toDay, nameCity: total[i] }));

      setTimeout(() => {
        setOpen(false);
      }, 1500);
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
        <Select value={number} onChange={(e) => setNumber(e.target.value)} disabled={open} style={{ fontSize: '1.4rem' }}>
          <MenuItem style={{ fontSize: '1.3rem' }} value={1}>
            1 Chart
          </MenuItem>
          <MenuItem style={{ fontSize: '1.3rem' }} value={5}>
            5 Chart
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default memo(ChartNumberSelection);
