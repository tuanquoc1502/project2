import React, { memo, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_WEATHER } from '../../../contansts/contansts';
import styles from './AddCity.module.scss';
import { styleModal } from '../allWeather/AllWeather';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';

function EditWeatherCity({ open, setOpen }) {
  const [values, setValues] = useState({ nameCity: '', tempC: '', humidity: '', wind: '' });

  const addDataWeather = useSelector((state) => state.allDataWeather);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //validate form

  const notify = () => toast.success('Successfully added');

  const handleAddCity = (addDataWeather) => {
    if (!values.nameCity || !values.tempC || !values.humidity || !values.wind) {
      return toast.warning('Please enter full information');
    }

    // check when cities overlap
    const isExists = addDataWeather.some((item) => {
      return values.nameCity.toLowerCase().replace(/\s/g, '') == item.nameCity.toLowerCase().replace(/\s/g, '');
    });

    if (isExists) {
      return toast.warning('The city already exists');
    }

    const data = {
      nameCity: values.nameCity,
      tempC: values.tempC,
      humidity: values.humidity,
      wind: values.wind,
    };

    dispatch(ADD_WEATHER(data));
    setOpen(false);
    notify();
  };

  return (
    <div>
      <ToastContainer />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleModal}>
          <div className={styles.heading} id="modal-modal-title" variant="h6" component="h2">
            Add Weather
          </div>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <h1 className={styles.header}>Name</h1>
            <div
              className={clsx(styles.nameCity, {
                [styles.active]: false,
              })}
            >
              <input name="nameCity" onChange={handleChangeInput} />
              <span>The city already exists</span>
            </div>

            <h1 className={styles.informations}>Informations</h1>

            <div className={styles.temperature}>
              <input name="tempC" type="number" onChange={handleChangeInput} />
            </div>
            <div className={styles.details}>
              <input name="humidity" type="number" data-testid="inputHumidity" className={styles.humidityInput} onChange={handleChangeInput} />
              <input name="wind" type="number" data-testid="inputWind" className={styles.windInput} onChange={handleChangeInput} />
            </div>

            <button className={styles.cancelBtn} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={() => handleAddCity(addDataWeather)}>
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default memo(EditWeatherCity);
