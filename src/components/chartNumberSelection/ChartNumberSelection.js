import React, { memo, useEffect, useState } from 'react';
import { API_RESET, FETCH_API_REQUEST, toDay } from '../../contansts/contansts';
import { useDispatch } from 'react-redux';
import './ChartNumberSelection.scss';
import { FormControl, MenuItem, Select } from '@mui/material';

const ChartNumberSelection = () => {
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    // city ​​entered by user
    const total = ['ha noi', 'ho chi minh', 'new york', 'Bà Rịa', 'ninh binh'];

    dispatch(API_RESET());
    for (let i = 0; i < number; i++) {
      console.log(i);
      dispatch(FETCH_API_REQUEST({ id: toDay, nameCity: total[i] }));
    }
  }, [number]);

  return (
    <div>
      <FormControl
        sx={{
          mt: 5,
          mb: 2,
          minWidth: 150,
          background: 'white',
          borderRadius: '10px',
        }}
      >
        <Select value={number} onChange={(e) => setNumber(e.target.value)}>
          <MenuItem value={1}>1 Chart</MenuItem>
          <MenuItem value={5}>5 Chart</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(ChartNumberSelection);
