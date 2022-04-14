import React, { memo, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { ADD_WEATHER } from '../../../contansts/contansts';
import styles from './AddCity.module.scss';

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
  border: '1px solid #000',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  p: 4,
};

function EditWeatherCity({ open, setOpen, indexWeather }) {
  const [nameCity, setNameCity] = useState();
  const [tempC, setTempC] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const notify = () => toast.success('successfully added');

  const handleAddCity = () => {
    if (!nameCity || !tempC || !humidity || !wind) {
      return toast.warning('Please enter full information');
    }

    const data = {
      nameCity,
      tempC,
      humidity,
      wind,
    };

    dispatch(ADD_WEATHER(data));
    setOpen(false);
    notify();
  };

  return (
    <div>
      <ToastContainer />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className={styles.heading} id="modal-modal-title" variant="h6" component="h2">
            Add Weather
          </div>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <h1 className={styles.header}>Name</h1>
            <div className={styles.nameCity}>
              <input onChange={(e) => setNameCity(e.target.value)} />
            </div>

            <h1 className={styles.informations}>Informations</h1>

            <div className={styles.temperature}>
              <input onChange={(e) => setTempC(e.target.value)} />
            </div>
            <div className={styles.details}>
              <input className={styles.humidityInput} onChange={(e) => setHumidity(e.target.value)} />
              <input className={styles.windInput} onChange={(e) => setWind(e.target.value)} />
            </div>

            <button className={styles.cancelBtn} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleAddCity}>
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default memo(EditWeatherCity);
