import React, { memo, useEffect, useState } from 'react';
import { FETCH_API_REQUEST_ONE, FETCH_API_REQUEST_FIVE, toDay } from '../../contansts/contansts';
import { useDispatch } from 'react-redux';
import './ChartNumberSelection.scss';
import { FormControl, MenuItem, Select } from '@mui/material';

const ChartNumberSelection = () => {
  const [age, setAge] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    // city ​​entered by user
    const total = ['ho chi minh', 'new york', 'Bà Rịa', 'ninh binh'];

    if (age === 1) {
      dispatch(FETCH_API_REQUEST_ONE({ id: toDay, nameCity: 'ha noi' }));
    }

    if (age === 5) {
      total.forEach((city) => {
        dispatch(FETCH_API_REQUEST_FIVE({ id: toDay, nameCity: city }));
      });
    }
  }, [age]);

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
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          <MenuItem value={1}>1 Chart</MenuItem>
          <MenuItem value={5}>5 Chart</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(ChartNumberSelection);
