import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.module.scss';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <CircularProgress className={styles.color} />
    </Box>
  );
}
