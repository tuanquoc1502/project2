import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { DELETE_WEATHER } from '../../../contansts/contansts';
import { useDispatch } from 'react-redux';
import styles from './DeleteCity.module.scss';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteCity({ indexWeather, openConfirm, setOpenConfirm }) {
  const dispatch = useDispatch();

  const notify = () => toast.success('successfully deleted');

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const handleDetele = (indexWeather) => {
    dispatch(DELETE_WEATHER(indexWeather));
    setOpenConfirm(false);
    notify();
  };

  return (
    <div>
      <ToastContainer />
      <Modal open={openConfirm} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className={styles.boxConfirm}>
            <h1>Are you sure you want to delete</h1>
            <div className={styles.confirmBtn}>
              <button onClick={() => handleDetele(indexWeather)}>Delete</button>
              <button onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
